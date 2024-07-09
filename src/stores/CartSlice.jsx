import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusTab: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
  },
});

export const { toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;
