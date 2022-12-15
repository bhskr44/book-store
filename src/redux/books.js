import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid4';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    createBook: (state, action) => {
      if (action.payload.title && action.payload.author) {
        const newBook = {
          id: uuid4(),
          title: action.payload.title,
          author: action.payload.author,
        };
        state.push(newBook);
      } else {
        return state;
      }
      return '';
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    default: () => initialState,
  },
});

export const bookAction = bookSlice.actions;
export default bookSlice.reducer;
