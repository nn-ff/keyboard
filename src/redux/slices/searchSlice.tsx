import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchSlice {
  value: string;
}

const initialState: ISearchSlice = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
