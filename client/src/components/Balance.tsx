import { useAppSelector } from '../redux/app/hooks';
import { transactionSelector } from '../redux/reducer/TransactionSlice';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
  const { transactions } = useAppSelector(transactionSelector);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
