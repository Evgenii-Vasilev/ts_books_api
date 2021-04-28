import { FC } from "react";
import { Book } from '../types/book'

const BookCard: FC<{e: Book}> = ({ e }) => {
  return (
    <div className='card'>
          <div className='card__img'>
            <img
              src={`http://covers.openlibrary.org/b/id/${e.cover_i}-M.jpg`}
              alt='cover'
            />
          </div>
          <div className='card__info'>
            <h3>{e.title}</h3>
            <h4>
              <span>Author:</span> {e.author_name}
            </h4>
            <h5>
              <span>Year:</span> {e.first_publish_year}
            </h5>
          </div>
        </div>
  )
}

export default BookCard