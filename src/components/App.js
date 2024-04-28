import React from 'react';
import Header from './Header';
import SearchTransaction from './SearchBar';
import TransactionForm from './TransactionForm';

function App() {
  return (
    <div>
      <Header />
      <SearchTransaction />
      <TransactionForm />
    </div>
  )
}

export default App
