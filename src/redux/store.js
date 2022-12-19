import { configureStore } from '@reduxjs/toolkit';
import products from './slices/itemsSlice';
import newAndPopular from './slices/newsAndPopular';
import fetchAll from './slices/fetchAllSlice';
import fetchGlobal from './slices/fetchGlobalSlice';
import search from './slices/searchSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import modal from './slices/modalSlice';
export const store = configureStore({
  reducer: { products, newAndPopular, fetchAll, fetchGlobal, search, filter, cart, modal },
});
