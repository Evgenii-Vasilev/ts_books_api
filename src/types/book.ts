export interface Book {
  cover_i: number
  title: string
  author_name: string
  first_publish_year: number
}

export interface BookState {
  books: any[]
  loading?: boolean
  error?: null | string
}

export enum BookActionTypes {
  FETCH_BOOKS = 'FETCHBOOKS',
  FETCH_BOOKS_SECCESS = 'FETCHBOOKS_SECCESS',
  FETCH_BOOKS_ERROR = 'FETCHBOOKS_ERROR',
  SORT_BOOKS = 'SORT_BOOKS',
}

interface FetchBooksAction {
  type: BookActionTypes.FETCH_BOOKS
}

interface FetchBooksSuccessAction {
  type: BookActionTypes.FETCH_BOOKS_SECCESS
  payload: any[]
}

interface FetchBooksErrorAction {
  type: BookActionTypes.FETCH_BOOKS_ERROR
  payload: string
}

interface SortBooks {
  type: BookActionTypes.SORT_BOOKS
  payload: any[]
}

export type BookAction =
  | FetchBooksAction
  | FetchBooksSuccessAction
  | FetchBooksErrorAction
  | SortBooks
