import { v4 as uuid4 } from 'uuid4';

const initialState = [];

// Actions
export const ADD = 'add-book';
export const REMOVE = 'remove-book';


// Action Creators
export function addBook(newBook) {
  return { type: ADD, newBook };
}

export function removeBook(id) {
  return { type: REMOVE , id};
}



// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newBook = {
        id: uuid4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      initialState.push(newBook);
      return [...state, newBook];
    }
    case REMOVE:
      return state.filter((widget) => widget.id !== action.payload.id);
    default:
      return state;
  }
};