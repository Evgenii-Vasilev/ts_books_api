import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { sortBooks } from '../redux/actions'
import { BookState } from '../types/book'

const Filter: React.FC<BookState> = ({ books }) => {
  const dispatch = useDispatch()

  function filter(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'new') {
      books.sort(
        (a, b) =>
          b.first_publish_year - a.first_publish_year
      )
      dispatch(sortBooks(books))
    } else {
      books.sort(
        (a, b) =>
          a.first_publish_year - b.first_publish_year
      )
      dispatch(sortBooks(books))
    }
  }

  if (books.length === 0) return <div></div>

  return (
    <div className='filter'>
      <label htmlFor='year'>Отсортировать по году:</label>
      <select name='year' onChange={filter}>
        <option value='new'>Сначала новые</option>
        <option value='old'>Сначала старые</option>
      </select>
      <span className="custom-arrow"></span>
    </div>
  )
}

export default Filter
