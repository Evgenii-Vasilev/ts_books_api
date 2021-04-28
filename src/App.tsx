import './styles.css';
import React from 'react';

import Input from './components/Input';
import BookList from './components/BookList';

const App: React.FC = () => {
  return (
    <>
      <Input />
      <BookList />
    </>
  );
};

export default App;
