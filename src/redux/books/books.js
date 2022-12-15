import { uuid4 } from 'uuid4';

const initialState = [
  {
    id: uuid4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuid4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuid4(),
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
  },
];

// Actions
export const ADD = 'add-book';
export const REMOVE = 'remove-book';

// Action Creators
export function addBook(newBook) {
  return { type: ADD, newBook };
}

export function removeBook(id) {
  return { type: REMOVE, id };
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
      return [...state, newBook];
    }
    case REMOVE: {
      return state.filter((widget) => widget.id !== action.id);
    }
    default:
      return state;
  }
};
