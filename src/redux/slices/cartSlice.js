import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddItem(state, action) {
      state.cartItem = [...state.cartItem, action.payload];
    },
  },
});

export const { setAddItem } = cartSlice.actions;

export default cartSlice.reducer;
