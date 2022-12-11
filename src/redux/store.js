import { configureStore } from '@reduxjs/toolkit';
import products from './slices/itemsSlice';
import newAndPopular from './slices/newsAndPopular';

export const store = configureStore({
  reducer: { products, newAndPopular },
});
