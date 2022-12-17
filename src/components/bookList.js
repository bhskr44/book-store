import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setBooks } from '../redux/books/books';
import SingleBook from './singleBook';
import './css/bookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const getBooksFromServer = async () => {
    axios({
      method: 'GET',
      url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/msW0hxnGD5Hf1orlt2iq/books',
    }).then((response) => {
      const olBooks = [];
      const { data } = response;
      for (let i = 0; i < Object.keys(data).length; i += 1) {
        const id = Object.keys(data)[i];
        const bookDetails = data[Object.keys(data)[i]];
        const { title, author } = bookDetails[0];
        const book = {
          id,
          title,
          author,
        };
        olBooks.push(book);
      }
      dispatch(setBooks(olBooks));
    });
  };

  useEffect(() => {
    getBooksFromServer().catch((error) => {
      console.log('error', error);
      dispatch(setBooks(books));
    });
  }, [dispatch]);

  return (
    <div className="BookList">
      <ul className="book-unordered-list">
        {books.map((sBook) => (
          <li className="book-list-item" key={sBook.id}>
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
