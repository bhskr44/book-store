import React from 'react';
import SingleBook from './singleBook';

const BookList = () => {
  return (
    <div className="BookList">
      <ul>
        <SingleBook title="Alice In Wonderland" author="Lewis Carroll" />
        <SingleBook title="Harry Porter" author="JK Rowlings" />
        <SingleBook title="The Hobbit" author="JRR Tolkien" />
      </ul>
    </div>
  );
};

export default BookList;
