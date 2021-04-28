import { FC } from 'react'
import { Book } from '../types/book'
import BookCard from './BookCard'


const BookList: FC<{books: Book[]}> = ({ books }) => {

  return (
    <div className='books'>
      {books.map((e, i) => (
        <BookCard e={e} key={i}/>
      ))}
    </div>
  )
}

export default BookList
