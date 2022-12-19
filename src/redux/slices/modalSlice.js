import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visibleCart: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setVisibleCart(state, action) {
      state.visibleCart = action.payload;
    },
  },
});

export const { setVisibleCart } = modalSlice.actions;

export default modalSlice.reducer;
