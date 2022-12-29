import { configuration } from '@/configuration';
import UserState from '@/interface/user-state';
import { User } from '@/model/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  items: configuration.defaultUsers.map((user) => new User(user))
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>): void {
      const newUsers = state.items.concat(action.payload);

      Object.assign(state, { items: newUsers });
    }
  }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
