import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IItems } from '../../types/Type';
import {
  stringCalculartorAccType,
  stringCalculartorCategory,
  stringCalculartorSize,
  stringCalculatorBrand,
  stringCalculatorDest,
  stringCalculatorKeyWire,
  stringCalculatorRGB,
} from '../../utils/catStringCalc';
import { IproductSlice } from './itemsSlice';

export const fetchAllProducts = createAsyncThunk(
  'allProducts/fetchAllProductsStatus',
  async (params: { category: string; query?: string }) => {
    const { category, query } = params;
    if (query) {
      const sizeString = stringCalculartorSize(query);
      const categoryString = stringCalculartorCategory(query, category);
      const keyWireString = stringCalculatorKeyWire(query);
      const rgbString = stringCalculatorRGB(query);
      const brandString = stringCalculatorBrand(query);
      const destString = stringCalculatorDest(query);
      const accTypeString = stringCalculartorAccType(query);

      const { data } = await axios.get<IItems[]>(
        `https://63264eebba4a9c4753256eee.mockapi.io/items?${categoryString}${sizeString}${keyWireString}${rgbString}${brandString}${destString}${accTypeString}`,
      );
      return data;
    } else {
      const { data } = await axios.get<IItems[]>(
        `https://63264eebba4a9c4753256eee.mockapi.io/items?`,
      );
      return data;
    }
  },
);

const initialState: IproductSlice = {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<IItems[]>) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setProductAll } = fetchAllSlice.actions;

export default fetchAllSlice.reducer;
