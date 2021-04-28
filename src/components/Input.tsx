import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchBooks } from '../redux/actions'

const Input: React.FC = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')


  useEffect(() => {
    const delayFetch = setTimeout(() => {
      dispatch(fetchBooks(search))
    }, 5000)
    return () => clearTimeout(delayFetch)
  }, [search])

  return (
    <header>
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Введи книгу, которую вы хотите найти'
      />
    </header>
  )
};

export default Input;
