import UserModalState from '@/interface/user-modal-state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserModalState = {
  isOpen: false,
  title: '',
  user: null,
  stageID: null
};

const userModalSlice = createSlice({
  name: 'userModal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<Partial<UserModalState>>) {
      Object.assign(state, { ...action.payload, isOpen: true });
    },
    close(state) {
      Object.assign(state, initialState);
    }
  }
});

export const { open, close } = userModalSlice.actions;

export default userModalSlice.reducer;
