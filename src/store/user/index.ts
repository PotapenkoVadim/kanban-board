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
    },
    removeUser(state, action: PayloadAction<{ userID: string }>): void {
      const newUsers = state.items.filter(
        (item) => item.id !== action.payload.userID
      );

      Object.assign(state, { items: newUsers });
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
