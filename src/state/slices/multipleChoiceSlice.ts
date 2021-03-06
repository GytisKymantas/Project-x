import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMultipleChoice } from "state/types";

export const initialState: IMultipleChoice = {
  multiple_choice: [],
  multiple_choiceGoals: [],
};

export const MultipleChoiceSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setMultipleChoice: (state, actions: PayloadAction<string[]>) => {
      state.multiple_choice = [...state.multiple_choice, ...actions.payload];
    },
    setMultipleChoiceGoals: (state, actions: PayloadAction<string[]>) => {
      state.multiple_choiceGoals = [
        ...state.multiple_choiceGoals,
        ...actions.payload,
      ];
    },
    setMultipleReset: (state, actions: PayloadAction<string[]>) => {
      state.multiple_choice = [...actions.payload];
      state.multiple_choiceGoals = [...actions.payload];
    },
  },
});

export const { setMultipleChoice, setMultipleChoiceGoals, setMultipleReset } =
  MultipleChoiceSlice.actions;
export default MultipleChoiceSlice;
