import React from 'react';
import BookList from './bookList';
import AddBook from './addBook';

const homePage = () => {
  return (
    <div className="homePage">
      <BookList />
      <AddBook />
    </div>
  );
};

export default homePage;
