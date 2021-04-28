import { Dispatch } from 'react';
import axios from 'axios';

import { BookAction } from '../types/book';
import { BookActionTypes } from '../types/book';

export function fetchBooks() {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_SECCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Произошла ошибка при связи с сервером'
      });
    }
  };
}
