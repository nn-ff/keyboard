import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: true,
  popular: false,
};

const popularSlice = createSlice({
  name: 'newAndPopular',
  initialState,
  reducers: {
    setNewsPopular(state) {
      state.news = !state.news;
      state.popular = !state.popular;
    },
  },
});

export const { setNewsPopular } = popularSlice.actions;

export default popularSlice.reducer;
