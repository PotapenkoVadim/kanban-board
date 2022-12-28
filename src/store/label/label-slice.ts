import { createSlice } from '@reduxjs/toolkit';

const labelSlice = createSlice({
  name: 'label',
  initialState: {},
  reducers: {
    test() {
      console.log('test')
    }
  }
});

export const { test } = labelSlice.actions;

export default labelSlice.reducer;
