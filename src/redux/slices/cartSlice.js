import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddItem(state, action) {
      const itemInCart = state.cartItem.find(
        (item) => item.id == action.payload.id && item.switch == action.payload.switch,
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cartItem.push({ ...action.payload, count: 1 });
      }
    },
    incrementCount(state, action) {
      const item = state.cartItem.find((item, id) => id === action.payload);
      item.count++;
    },
    decrementCount(state, action) {
      const item = state.cartItem.find((item, id) => id === action.payload);
      if (item.count == 1) {
        item.count = 1;
      } else {
        item.count--;
      }
    },
    removeItem(state, action) {
      const removeItem = state.cartItem.filter((item, id) => id !== action.payload);
      state.cartItem = removeItem;
    },
  },
});

export const { setAddItem, incrementCount, decrementCount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
