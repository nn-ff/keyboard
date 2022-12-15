import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  stringCalculartorAccType,
  stringCalculartorCategory,
  stringCalculartorSize,
  stringCalculatorBrand,
  stringCalculatorDest,
  stringCalculatorKeyWire,
  stringCalculatorRGB,
} from '../../utils/catStringCalc';

export const fetchAllProducts = createAsyncThunk(
  'allProducts/fetchAllProductsStatus',
  async (params) => {
    const { category, size, wire, backlight, brand, dest, accType } = params;
    const sizeString = stringCalculartorSize(size);
    const categoryString = stringCalculartorCategory(size, category);
    const keyWireString = stringCalculatorKeyWire(wire);
    const rgbString = stringCalculatorRGB(backlight);
    const brandString = stringCalculatorBrand(brand);
    const destString = stringCalculatorDest(dest);
    const accTypeString = stringCalculartorAccType(accType);
    const { data } = await axios.get(
      `https://63264eebba4a9c4753256eee.mockapi.io/items?${categoryString}${sizeString}${keyWireString}${rgbString}${brandString}${destString}${accTypeString}`,
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
