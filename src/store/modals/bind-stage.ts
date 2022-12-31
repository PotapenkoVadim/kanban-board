import BindStageModalState from '@/interface/bind-stage-modal-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BindStageModalState = {
  isOpen: false,
  title: '',
  stage: null
};

const bindStageModalSlice = createSlice({
  name: 'bindStageModal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Partial<BindStageModalState>>) {
      Object.assign(state, { ...action.payload, isOpen: true });
    },
    close(state) {
      Object.assign(state, initialState);
    }
  }
});

export const { open, close } = bindStageModalSlice.actions;

export default bindStageModalSlice.reducer;
