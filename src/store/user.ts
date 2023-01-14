import UserState from '@/interface/user-state';
import { UserModel } from '@/model/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: UserState = {
  items: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUsers(state, action: PayloadAction<Array<UserModel>>) {
      Object.assign(state, { items: action.payload });
    },
    addUser(state, action: PayloadAction<UserModel | Array<UserModel>>): void {
      const newUsers = state.items.concat(action.payload);

      Object.assign(state, { items: newUsers });
    },
    updateUser(state, action: PayloadAction<UserModel>) {
      const newUsers = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return new UserModel({
            ...item,
            ...action.payload
          });
        }

        return item;
      });

      Object.assign(state, { items: newUsers });
    },
    removeUser(state, action: PayloadAction<{ userID: number }>): void {
      const newUsers = state.items.filter(
        (item) => item.id !== action.payload.userID
      );

      Object.assign(state, { items: newUsers });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      Object.assign(state, { items: action.payload.user.items });
    });
  }
});

export const { addUser, removeUser, updateUser, initUsers } = userSlice.actions;

export default userSlice.reducer;
