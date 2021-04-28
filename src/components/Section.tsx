import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList'
import Spinner from './Spinner'
import Pagination from './Pagination'
import Filter from './Filter'


const Section: React.FC = () => {

  const { books, loading } = useSelector((state) => state);
  books.filter((e) => e.cover_i !== undefined)
  const [currentPage, setCurrentPage] = useState(1)

  console.log(books);

  const booksPerPage = 10
  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstPost = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastBook)

  function changePage(pageNum){
    setCurrentPage(pageNum)
  }

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
  );
};

export default Section;
