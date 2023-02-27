import { createSlice } from '@reduxjs/toolkit';

interface IPopularSlice {
  news: boolean;
  popular: boolean;
}

const initialState: IPopularSlice = {
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
