import { createSlice } from '@reduxjs/toolkit';
import { LabelState } from './state';

const labelSlice = createSlice({
  name: 'label',
  initialState: new LabelState(),
  reducers: {
    test() {
      console.log('test');
    }
  }
});

export const { test } = labelSlice.actions;

export default labelSlice.reducer;
