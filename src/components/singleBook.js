import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const SingleBook = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'remove-book', id });
  };

  return (
    <div className="singleBook">
      <h3>{title}</h3>
      <p>{author}</p>

      <button type="button" onClick={handleClick}>
        Remove Book
      </button>
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
