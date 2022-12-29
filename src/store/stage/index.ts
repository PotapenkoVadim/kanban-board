import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stage } from '@/model/stage';
import StageState from '@/interface/stage-state';
import { configuration } from '@/configuration';

const initialState: StageState = {
  items: configuration.defaultStages
};

const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    addStage(state, action: PayloadAction<Stage>): void {
      state.items.push(action.payload);
    }
  }
});

export const { addStage } = stageSlice.actions;

export default stageSlice.reducer;
