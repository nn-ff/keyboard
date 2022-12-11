import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGlobal = createAsyncThunk('fetchGlobal/fetchGlobalStatus', async (params) => {
  const { data } = await axios.get(`https://63264eebba4a9c4753256eee.mockapi.io/items`);
  return data;
});

const initialState = {
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
  extraReducers: {
    [fetchGlobal.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchGlobal.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchGlobal.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const { setGlobal } = fetchGlobalSlice.actions;

export default fetchGlobalSlice.reducer;
