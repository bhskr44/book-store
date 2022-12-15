import { configureStore } from '@reduxjs/toolkit';
import books from './books';
import categories from './categories';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
});

export default store;
