import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { stringCalculartorNews, stringCalculartorPopular } from '../../utils/catStringCalc';

export const fetchProductsNews = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params) => {
    const { popular, news } = params;
    const popularString = stringCalculartorPopular(popular);
    const newsString = stringCalculartorNews(news);
    const { data } = await axios.get(
      `https://63264eebba4a9c4753256eee.mockapi.io/items?&${popularString}${newsString}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

const productNewSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchProductsNews.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProductsNews.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchProductsNews.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setProduct } = productNewSlice.actions;

export default productNewSlice.reducer;
