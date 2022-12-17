import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: false,
  size: false,
  soldout: 'close',
  wire: false,
  accType: false,
  switches: {
    id: 'close',
    soldout: 'close',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setSoldout(state, action) {
      state.soldout = action.payload;
    },
    setSwitchId(state, action) {
      state.switches.id = action.payload;
    },
    setSwitchSoldout(state, action) {
      state.switches.soldout = action.payload;
    },
    setWire(state, action) {
      state.wire = action.payload;
    },
    setAccType(state, action) {
      state.accType = action.payload;
    },
  },
});

export const { setBrand, setSize, setSoldout, setSwitchId, setSwitchSoldout, setWire, setAccType } =
  filterSlice.actions;

export default filterSlice.reducer;
