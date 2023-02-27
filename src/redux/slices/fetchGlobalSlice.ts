import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IItems } from '../../types/Type';
import { stringCalculartorSearch } from '../../utils/catStringCalc';
import { IproductSlice } from './itemsSlice';

export const fetchGlobal = createAsyncThunk(
  'fetchGlobal/fetchGlobalStatus',
  async (params: { search: string }) => {
    const { search } = params;
    const titleString = stringCalculartorSearch(search);
    const { data } = await axios.get(
      `https://63264eebba4a9c4753256eee.mockapi.io/items${titleString}`,
    );
    return data;
  },
);

const initialState: IproductSlice = {
  items: [],
  status: 'loading',
};

const fetchGlobalSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setGlobal(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobal.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGlobal.fulfilled, (state, action: PayloadAction<IItems[]>) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchGlobal.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setGlobal } = fetchGlobalSlice.actions;

export default fetchGlobalSlice.reducer;
