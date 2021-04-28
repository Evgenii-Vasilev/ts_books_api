export interface BookState {
  books: any[];
  loading: boolean;
  error: null | string;
}

export enum BookActionTypes {
  FETCH_BOOKS = 'FETCHBOOKS',
  FETCH_BOOKS_SECCESS = 'FETCHBOOKS_SECCESS',
  FETCH_BOOKS_ERROR = 'FETCHBOOKS_ERROR'
}

interface FetchBooksAction {
  type: BookActionTypes.FETCH_BOOKS;
}

interface FetchBooksSuccessAction {
  type: BookActionTypes.FETCH_BOOKS_SECCESS;
  payload: any[];
}

interface FetchBooksErrorAction {
  type: BookActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
}

export type BookAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction;
