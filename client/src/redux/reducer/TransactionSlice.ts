import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';

export interface TransactionType {
  _id: number;
  text: string;
  amount: number;
}

type TransactionState = {
  transactions: TransactionType[];
  error: string | null | any;
  isLoading: boolean;
};

const initialState: TransactionState = {
  transactions: [],
  error: null,
  isLoading: true,
};

export const getTransactions = createAsyncThunk(
  'transaction/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/transactions');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/create',
  async (transactionData: TransactionType, thunkAPI) => {
    try {
      const res = await axios.post('/api/transactions', transactionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async (id: number, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/transactions/${id}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = payload.data;
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload.error;
      });
    builder
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = [...state.transactions, payload.data];
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload.error;
      });
    builder
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          (x) => x._id !== payload.data._id
        );
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        // state.error = payload.error;
      });
  },
});

export const transactionSelector = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
