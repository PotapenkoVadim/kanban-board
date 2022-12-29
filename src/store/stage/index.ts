import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StageModel } from '@/model/stage';
import StageState from '@/interface/stage-state';
import { configuration } from '@/configuration';

const initialState: StageState = {
  items: configuration.defaultStages
};

const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    addStage(state, action: PayloadAction<StageModel>): void {
      const newStages = state.items.concat(action.payload);

      Object.assign(state, { items: newStages });
    },
    updateStage(state, action: PayloadAction<StageModel>) {
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
    removeStage(state, action: PayloadAction<StageModel>): void {
      const filteredStages = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      Object.assign(state, { items: filteredStages });
    }
  }
});

export const { addStage, removeStage, updateStage } = stageSlice.actions;

export default stageSlice.reducer;
