import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions';

const BookList: React.FC = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <ul>
      {state.books.map((e, i) => (
        <li key={i}>{e.name}</li>
      ))}
    </ul>
  );
};

export default BookList;
