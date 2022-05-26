import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

export const initialState = {
  quizData: [],
};

export const QuizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setUsers: (state, actions: PayloadAction<any["users"]>) => {
      state.quizData = actions.payload;
    },
  },
});

export const { setUsers } = QuizDataSlice.actions;
export default QuizDataSlice;
