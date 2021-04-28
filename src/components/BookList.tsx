import React from 'react';

const BookList: React.FC = ({books}) => {

  return (
    {books
      .map((e, i) => (
        <div className='card' key={i} >
          <div className="card__img">
            <img
              src={`http://covers.openlibrary.org/b/id/${e.cover_i}-S.jpg`}
              alt='cover'
            />
          </div>
          <div className="card__info">
            <h3>{e.title}</h3>
            <h4><span>Author:</span> {e.author_name}</h4>
            <h5><span>Year:</span> {e.first_publish_year}</h5>
            </div>
        </div>
  );
};

export default BookList;
