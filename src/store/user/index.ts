import UserState from '@/interface/user-state';
import { createSlice } from '@reduxjs/toolkit';
import { reducers, extraReducers } from './reducers';

const initialState: UserState = {
  items: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
  extraReducers
});

export const { addUser, removeUser, updateUser, initUsers } = userSlice.actions;

export default userSlice.reducer;
