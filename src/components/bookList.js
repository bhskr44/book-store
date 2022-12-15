import React from 'react';
import { useSelector } from 'react-redux';
import SingleBook from './singleBook';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="BookList">
      <ul>
        {books.map((sBook) => (
          <li key={sBook.id}>
            <SingleBook
              id={sBook.id}
              title={sBook.title}
              author={sBook.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
