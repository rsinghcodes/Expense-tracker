import { useEffect } from 'react';

import { Transaction } from './Transaction';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import {
  transactionSelector,
  getTransactions,
} from '../redux/reducer/TransactionSlice';

const TransactionList = () => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector(transactionSelector);

  useEffect(() => {
    dispatch(getTransactions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Transaction's History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
