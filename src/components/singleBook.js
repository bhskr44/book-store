import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import './css/singleBook.css';

const SingleBook = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'remove-book', id });
  };

  return (
    <div className="singleBook">
      <div className="book-details">
        <div className="book-category">Action</div>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <ul className="important-buttons">
          <li>
            <button className="li-type-btn" type="button">
              Commnets
            </button>
          </li>
          <li>
            <button className="li-type-btn" type="button" onClick={handleClick}>
              Remove Book
            </button>
          </li>

          <li>
            <button className="li-type-btn" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="progess-section">
        <div className="spinnerSec">
          <div className="progress-spinner">
            <CircularProgress variant="determinate" value={87} />
          </div>
          <div className="progress">
            <span>87%</span>
            Completed
          </div>
        </div>
        <div className="chapter">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter-number">Chapter 17</div>
          <button className="update-progress" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

SingleBook.defaultProps = {
  id: '',
  title: '',
  author: '',
};

SingleBook.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default SingleBook;
