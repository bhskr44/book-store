import React from 'react';

const AddBook = () => {
  return (
    <div className="addBook">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Title" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" placeholder="Author" />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
