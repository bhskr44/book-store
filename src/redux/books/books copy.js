import axios from 'axios';
import { uuid4 } from 'uuid4';

const initialState = [];

// Actions
export const ADD = 'add-book';
export const REMOVE = 'remove-book';
export const GETBOOKS = 'get-books';
export const SETBOOKS = 'set-books';

// Action Creators
export function addBook(newBook) {
  return { type: ADD, newBook };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}

export function getBooks() {
  return { type: GETBOOKS };
}

export function setBooks(books) {
  return { type: SETBOOKS, books };
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newBook = {
        id: uuid4(),
        title: action.book.title,
        author: action.book.author,
      };

      axios({
        method: 'post',
        url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/msW0hxnGD5Hf1orlt2iq/books',
        headers: {},
        data: {
          item_id: newBook.id,
          title: newBook.title,
          category: 'All',
          author: newBook.author,
        },
      });

      return [...state, newBook];
    }
    case REMOVE: {
      axios({
        method: 'delete',
        url: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/msW0hxnGD5Hf1orlt2iq/books/${action.id}`,
        headers: {},
      });
      return state.filter((widget) => widget.id !== action.id);
    }
    case GETBOOKS: {
      axios({
        method: 'GET',
        url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/msW0hxnGD5Hf1orlt2iq/books',
        headers: {},
      }).then((response) => {
        const data = JSON.parse(JSON.stringify(response.data));
        for (let i = 0; i < Object.keys(data).length; i += 1) {
          const id = Object.keys(data)[i];
          const bookDetails = data[Object.keys(data)[0]];

          const { title, author } = bookDetails[0];
          const book = {
            id,
            title,
            author,
          };
          state.push(book);
        }
      });
      return state;
    }
    case SETBOOKS: {
      return action.books;
    }
    default:
      return state;
  }
};
