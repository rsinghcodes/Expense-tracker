import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import transactionReducer from '../reducer/TransactionSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
