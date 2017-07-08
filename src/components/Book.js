import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    Book: PropTypes.shape({
      id: PropTypes.string,
      imageLinks: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      shelf: PropTypes.string.isRequired,
    }),
    onChangeSelf: PropTypes.func.isRequired
  }

  render () {
    const { Book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks.thumbnail})`}}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{Book.title}</div>
          {Book.authors.map((author) => (
            <div key={author} className="book-authors">{author}</div>
          ))}
        </div>
      </li>
    )
  }
}

export default Book