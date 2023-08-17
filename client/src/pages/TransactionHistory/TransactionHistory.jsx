import React from 'react';
import Header from '../../components/Header/Header';
import TransactionTable from '../../components/TransactionTable';

function TransactionHistory() {
  return (
    <div>
      <Header />
      <TransactionTable/>
    </div>
  );
}

export default TransactionHistory;
