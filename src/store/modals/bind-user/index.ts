import BindUserModalState from '@/interface/bind-user-modal-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BindUserModalState = {
  isOpen: false,
  title: '',
  user: null
};

const bindUserModalSlice = createSlice({
  name: 'bindUserModal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Partial<BindUserModalState>>) {
      Object.assign(state, { ...action.payload, isOpen: true });
    },
    close(state) {
      Object.assign(state, initialState);
    }
  }
});

export const { open, close } = bindUserModalSlice.actions;

export default bindUserModalSlice.reducer;
