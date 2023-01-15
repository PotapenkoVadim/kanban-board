import UserState from '@/interface/user-state';
import { UserModel } from '@/model/user';
import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const reducers = {
  initUsers(state: UserState, action: PayloadAction<Array<UserModel>>): void {
    Object.assign(state, { items: action.payload });
  },
  addUser(
    state: UserState,
    action: PayloadAction<UserModel | Array<UserModel>>
  ): void {
    const newUsers = state.items.concat(action.payload);

    Object.assign(state, { items: newUsers });
  },
  updateUser(state: UserState, action: PayloadAction<UserModel>): void {
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
  removeUser(
    state: UserState,
    action: PayloadAction<{ userID: number }>
  ): void {
    const newUsers = state.items.filter(
      (item) => item.id !== action.payload.userID
    );

    Object.assign(state, { items: newUsers });
  }
};

export const extraReducers = (
  builder: ActionReducerMapBuilder<UserState>
): void => {
  builder.addCase(HYDRATE, (state, action: any) => {
    Object.assign(state, { items: action.payload.user.items });
  });
};
