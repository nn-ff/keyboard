import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './slices/itemsSlice';
import newAndPopular from './slices/newsAndPopular';
import fetchAll from './slices/fetchAllSlice';
import fetchGlobal from './slices/fetchGlobalSlice';
import search from './slices/searchSlice';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import modal from './slices/modalSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  products,
  newAndPopular,
  fetchAll,
  fetchGlobal,
  search,
  filter,
  cart,
  modal,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
