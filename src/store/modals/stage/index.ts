import StageModalState from '@/interface/stage-modal-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: StageModalState = {
  isOpen: false,
  title: '',
  stage: null
};

const stageModalSlice = createSlice({
  name: 'stageModal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Partial<StageModalState>>) {
      Object.assign(state, { ...action.payload, isOpen: true });
    },
    close(state) {
      Object.assign(state, initialState);
    }
  }
});

export const { open, close } = stageModalSlice.actions;

export default stageModalSlice.reducer;
