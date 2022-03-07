import { useAppDispatch } from '../redux/app/hooks';
import {
  deleteTransaction,
  TransactionType,
} from '../redux/reducer/TransactionSlice';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({
  transaction,
}: {
  transaction: TransactionType;
}) => {
  const dispatch = useAppDispatch();

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}₹{numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => dispatch(deleteTransaction(transaction._id!))}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
