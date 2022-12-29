import { createSlice } from '@reduxjs/toolkit';

const initSlice = createSlice({
  name: 'init',
  initialState: {
    isInit: false
  },
  reducers: {
    initApp(state, action) {
      state.isInit = action.payload;
    }
  }
});

export const { initApp } = initSlice.actions;

export default initSlice.reducer;
