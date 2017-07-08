import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Bookshelf from './components/Bookshelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    });
  }

  render() {
    const { Books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} />
                <Bookshelf title='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} />
                <Bookshelf title='Read' books={Books.filter((book) => book.shelf === 'read')} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />
        <Route path='/search' render={({history})=>(
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
