import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilterSlice {
  brand: string;
  size: string;
  soldout: string;
  wire: string;
  accType: string;
  switches: {
    id: number;
    soldout: string;
  };
}

const initialState: IFilterSlice = {
  brand: '',
  size: '',
  soldout: '',
  wire: '',
  accType: '',
  switches: {
    id: 55,
    soldout: 'close',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
    setSoldout(state, action: PayloadAction<string>) {
      state.soldout = action.payload;
    },
    setSwitchId(state, action: PayloadAction<number>) {
      state.switches.id = action.payload;
    },
    setSwitchSoldout(state, action: PayloadAction<string>) {
      state.switches.soldout = action.payload;
    },
    setWire(state, action: PayloadAction<string>) {
      state.wire = action.payload;
    },
    setAccType(state, action: PayloadAction<string>) {
      state.accType = action.payload;
    },
  },
});

export const { setBrand, setSize, setSoldout, setSwitchId, setSwitchSoldout, setWire, setAccType } =
  filterSlice.actions;

export default filterSlice.reducer;
