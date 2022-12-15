import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addBook = (book) => {
    setTitle('');
    setAuthor('');
    dispatch({
      type: 'add-book',
      book,
    });
  };

  const addBookHandler = () => {
    const book = {
      title,
      author,
    };
    addBook(book);
  };

  const addChangeHandler = (e) => {
    const { id, value } = e.target;
    if (id === 'title') {
      setTitle(value);
    } else if (id === 'author') {
      setAuthor(value);
    }
  };

  return (
    <div className="addBook">
      <form>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            onChange={addChangeHandler}
            placeholder="Title"
          />
        </label>
        <label htmlFor="author">
          Author
          <input
            type="text"
            id="author"
            onChange={addChangeHandler}
            placeholder="Author"
          />
        </label>
        <button type="button" onClick={addBookHandler}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
