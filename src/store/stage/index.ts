import { createSlice } from '@reduxjs/toolkit';
import StageState from '@/interface/stage-state';
import { configuration } from '@/configuration';
import { reducers, extraReducers } from './reducers';

const defaultStages = configuration.defaultStages;

const initialState: StageState = {
  items: defaultStages
};

const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers,
  extraReducers
});

export const {
  addStage,
  removeStage,
  updateStage,
  bindUserToStage,
  unbindUser,
  initUsersToStage
} = stageSlice.actions;

export default stageSlice.reducer;
