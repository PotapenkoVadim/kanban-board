import ConfirmationModalState from '@/interface/confirmation-modal-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ConfirmationModalState = {
  isOpen: false,
  title: ''
};

const confirmationModalSlice = createSlice({
  name: 'confirmationModal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Partial<ConfirmationModalState>>) {
      Object.assign(state, { ...action.payload, isOpen: true });
    },
    close(state) {
      Object.assign(state, initialState);
    }
  }
});

export const { open, close } = confirmationModalSlice.actions;

export default confirmationModalSlice.reducer;
