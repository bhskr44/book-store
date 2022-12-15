import React from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const dispatch = useDispatch();

  const addBook = (book) => {
    dispatch({
      type: 'add-book',
      book,
    });
  };

  const addBookHandler = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = {
      title,
      author,
    };
    addBook(book);
  };

  return (
    <div className="addBook">
      <form>
        <label htmlFor="title">
          Title
          <input type="text" id="title" placeholder="Title" />
        </label>
        <label htmlFor="author">
          Author
          <input type="text" id="author" placeholder="Author" />
        </label>
        <button type="button" onClick={addBookHandler}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
