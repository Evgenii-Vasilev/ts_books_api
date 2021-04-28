import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList'
import Spinner from './Spinner'
import Pagination from './Pagination'
import Filter from './Filter'
import { BookState } from '../types/book'


const Section: FC = () => {

  const { books, loading, error }  = useSelector<BookState, BookState>((state) => state);
  books.filter((e) => e.cover_i !== undefined)
  const [currentPage, setCurrentPage] = useState(1)

  const booksPerPage = 10
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstPost = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastBook)

  function changePage(pageNum: number){
    setCurrentPage(pageNum)
  }

  if (error) return <h2><span>{error}</span></h2>
  if (books[0] === '1') return <h2><span>Тут будет список книг</span></h2>

  return (
    <section>
      { loading ? 
      <Spinner />
      :
      <>
      <Filter books={currentBooks}/>
      <BookList books={currentBooks} />
      </>
      }
      <Pagination booksPerPage={booksPerPage} totalBooks={books.length} changePage={changePage} />
    </section>
  )
}

export default Section
