import { Dispatch } from 'react'
import axios from 'axios'

import { BookAction } from '../types/book'
import { BookActionTypes } from '../types/book'

export function fetchBooks(title : String) {
  return async (dispatch: Dispatch<BookAction>) => {
    try {
      dispatch({ type: BookActionTypes.FETCH_BOOKS })
      if (!title) {
        dispatch({
          type: BookActionTypes.FETCH_BOOKS_SECCESS,
          payload: ['1']
        })
      } else {
        const tmp = title.replace(/ /g, '+')
        const response = await axios.get(
          `http://openlibrary.org/search.json?title=${tmp}`
        )
        dispatch({
          type: BookActionTypes.FETCH_BOOKS_SECCESS,
          payload: response.data.docs,
        })
      }
    } catch (e) {
      dispatch({
        type: BookActionTypes.FETCH_BOOKS_ERROR,
        payload: 'Что-то пошло не так...',
      })
    }
  }
}

export function sortBooks(books: any[]) {
  return {
    type: BookActionTypes.SORT_BOOKS,
    payload: books,
  }
}
