import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { StageModel } from '@/model/stage';
import StageState from '@/interface/stage-state';
import { configuration } from '@/configuration';
import { HYDRATE } from 'next-redux-wrapper';

const defaultStages = configuration.defaultStages;

const removeUser = (
  state: StageState,
  data: number | Array<number>
): Array<StageModel> => {
  const filterUser = (userID: number): boolean => {
    if (Array.isArray(data)) {
      return data.includes(userID);
    } else {
      return data !== userID;
    }
  };

  return state.items.map((item) => {
    return {
      ...item,
      userIDs: item.userIDs.filter(filterUser)
    };
  });
};

export const reducers = {
  addStage(state: StageState, action: PayloadAction<StageModel>): void {
    const stages = state.items.map((item) => {
      return {
        ...item,
        userIDs: item.userIDs.filter(
          (userID) => !action.payload.userIDs.includes(userID)
        )
      };
    });
    const newStages = stages.concat(action.payload);

    Object.assign(state, { items: newStages });
  },
  updateStage(state: StageState, action: PayloadAction<StageModel>): void {
    const updatedStages = [...state.items].map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          ...action.payload
        };
      }

      return item;
    });

    Object.assign(state, { items: updatedStages });
  },
  removeStage(state: StageState, action: PayloadAction<StageModel>): void {
    const filteredStages = state.items.filter(
      (item) => item.id !== action.payload.id
    );

    Object.assign(state, { items: filteredStages });
  },
  bindUserToStage(
    state: StageState,
    action: PayloadAction<{ stageID: string; userID: number }>
  ): void {
    const stages = removeUser(state, action.payload.userID);

    const newStages = stages.map((item) => {
      if (item.id === action.payload.stageID) {
        return {
          ...item,
          userIDs: [...item.userIDs, action.payload.userID]
        };
      }

      return item;
    });

    Object.assign(state, { items: newStages });
  },
  initUsersToStage(
    state: StageState,
    action: PayloadAction<{ stageID: string; userIDs: Array<number> }>
  ): void {
    const newStages = state.items.map((item) => {
      if (item.id === action.payload.stageID) {
        return {
          ...item,
          userIDs: action.payload.userIDs
        };
      }

      return item;
    });

    Object.assign(state, { items: newStages });
  },
  unbindUser(
    state: StageState,
    action: PayloadAction<{ userID: number }>
  ): void {
    const stages = removeUser(state, action.payload.userID);

    Object.assign(state, { items: stages });
  }
};

export const extraReducers = (
  builder: ActionReducerMapBuilder<StageState>
): void => {
  builder.addCase(HYDRATE, (state, action: any) => {
    const newStages = state.items.map((item) => {
      if (item.id === defaultStages[0].id) {
        return {
          ...item,
          userIDs: action.payload.user.items.map((item) => item.id)
        };
      }

      return item;
    });

    Object.assign(state, { items: newStages });
  });
};
