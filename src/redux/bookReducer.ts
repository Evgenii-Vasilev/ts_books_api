import { BookState, BookAction, BookActionTypes } from '../types/book';

const initState: BookState = {
  books: [],
  loading: false,
  error: null
};

export default function bookReducer(
  state = initState,
  action: BookAction
): BookState {
  switch (action.type) {
    case BookActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [] };
    case BookActionTypes.FETCH_BOOKS_SECCESS:
      return { loading: false, error: null, books: action.payload };
    case BookActionTypes.FETCH_BOOKS_ERROR:
      return { loading: false, error: action.payload, books: [] };
    default:
      return state;
  }
}
