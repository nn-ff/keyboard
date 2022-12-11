import { configureStore } from '@reduxjs/toolkit';
import products from './slices/itemsSlice';
import newAndPopular from './slices/newsAndPopular';
import fetchAll from './slices/fetchAllSlice';
import fetchGlobal from './slices/fetchGlobalSlice';
export const store = configureStore({
  reducer: { products, newAndPopular, fetchAll, fetchGlobal },
});
