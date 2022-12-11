import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { stringCalculartorCategory, stringCalculartorSize } from '../../utils/catStringCalc';

export const fetchAllProducts = createAsyncThunk(
  'allProducts/fetchAllProductsStatus',
  async (params) => {
    const { category, size } = params;
    const sizeString = stringCalculartorSize(size);
    const categoryString = stringCalculartorCategory(size, category);
    const { data } = await axios.get(
      `https://63264eebba4a9c4753256eee.mockapi.io/items?${categoryString}${sizeString}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

const fetchAllSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAll(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setProductAll } = fetchAllSlice.actions;

export default fetchAllSlice.reducer;
