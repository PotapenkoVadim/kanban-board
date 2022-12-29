import { createSlice } from '@reduxjs/toolkit';
import { StageState } from './state';

const stageSlice = createSlice({
  name: 'stage',
  initialState: new StageState(),
  reducers: {
    test() {
      console.log('test');
    }
  }
});

export const { test } = stageSlice.actions;

export default stageSlice.reducer;
