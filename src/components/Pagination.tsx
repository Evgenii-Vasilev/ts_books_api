import { FC } from "react"

interface Props {
  booksPerPage: Number,
  totalBooks: Number,
  changePage: Function
}

const Pagination: FC<Props> = ({
  booksPerPage,
  totalBooks,
  changePage,
}) => {
  const pageNum = []
  for ( let i = 1; i < Math.ceil(+totalBooks / +booksPerPage); i++ ) {
    pageNum.push(i)
  }

  return (
    <ul className='pagination'>
      {pageNum.map((num) => (
        <li key={num} onClick={() => changePage(num)}>
          {num}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
