import React from 'react';

const SingleBook = (props) => {
  const { title, author } = props;

  const handleClick = () => {
    console.log(title);
    alert('Do You really want to delete this book from the list');
  };
  return (
    <div className="singleBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={handleClick}>Remove Book</button>
    </div>
  );
};

export default SingleBook;
