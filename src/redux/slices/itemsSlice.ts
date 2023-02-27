import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IItems } from '../../types/Type';

import { stringCalculartorNews, stringCalculartorPopular } from '../../utils/catStringCalc';

export const fetchProductsNews = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params: { popular: boolean; news: boolean }) => {
    const { popular, news } = params;
    const popularString = stringCalculartorPopular(popular);
    const newsString = stringCalculartorNews(news);
    const { data } = await axios.get<IItems[]>(
      `https://63264eebba4a9c4753256eee.mockapi.io/items?&${popularString}${newsString}`,
    );
    return data;
  },
);
export interface IproductSlice {
  items: IItems[];
  status: 'loading' | 'success' | 'error';
}
const initialState: IproductSlice = {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsNews.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsNews.fulfilled, (state, action: PayloadAction<IItems[]>) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchProductsNews.rejected, (state, action) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setProduct } = productNewSlice.actions;

export default productNewSlice.reducer;
