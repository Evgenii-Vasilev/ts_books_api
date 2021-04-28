import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { fetchBooks } from '../redux/actions'

let delayFetch: any

const Input: FC = () => {
  const dispatch = useDispatch()

  function changeHandler(e: String){
    clearTimeout(delayFetch)
    delayFetch = setTimeout(() => {
      dispatch(fetchBooks(e))
    }, 1000)
  }

  return (
    <header>
      <input
        type='text'
        onChange={(e) => changeHandler(e.target.value)}
        placeholder='Введи книгу, которую вы хотите найти'
      />
    </header>
  )
}

export default Input
