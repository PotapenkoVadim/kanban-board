import { configuration } from '@/configuration';
import UserState from '@/interface/user-state';
import { UserModel } from '@/model/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  items: configuration.defaultUsers.map((user) => new UserModel(user))
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserModel>): void {
      const newUsers = state.items.concat(action.payload);

      Object.assign(state, { items: newUsers });
    }
  }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
