import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItems } from '../../types/Type';

interface iCartState {
  cartItem: ICartItems[];
}

const initialState: iCartState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddItem(state, action: PayloadAction<ICartItems>) {
      const itemInCart = state.cartItem.find(
        (item) => item.id === action.payload.id && item.switch === action.payload.switch,
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state.cartItem.push({ ...action.payload, count: 1 });
      }
    },
    incrementCount(state, action: PayloadAction<number>) {
      const item = state.cartItem.find((item, id) => id === action.payload);
      if (item) {
        item.count++;
      }
    },
    decrementCount(state, action: PayloadAction<number>) {
      const item = state.cartItem.find((item, id) => id === action.payload);
      if (item) {
        item.count === 1 ? (item.count = 1) : item.count--;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const removeItem = state.cartItem.filter((item, id) => id !== action.payload);
      state.cartItem = removeItem;
    },
  },
});

export const { setAddItem, incrementCount, decrementCount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
