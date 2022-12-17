import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './css/addBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBook = (book) => {
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
    if (title === '' || author === '') {
      alert('Please fill in all fields');
      return;
    }
    addBook(book);
    setAuthor('');
    setTitle('');
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
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
      <h2>Add New Book</h2>
      <form>
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={addChangeHandler}
        />

        <input
          type="text"
          id="author"
          placeholder="Author"
          onChange={addChangeHandler}
        />

        <button className="add-book-btn" type="button" onClick={addBookHandler}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
