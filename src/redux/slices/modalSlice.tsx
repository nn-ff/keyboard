import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImodalSlice {
  visibleCart: boolean;
}

const initialState: ImodalSlice = {
  visibleCart: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setVisibleCart(state, action: PayloadAction<boolean>) {
      state.visibleCart = action.payload;
    },
  },
});

export const { setVisibleCart } = modalSlice.actions;

export default modalSlice.reducer;
