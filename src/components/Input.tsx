import React from 'react';

const Input: React.FC = () => {
  function submitHandler(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Input;
