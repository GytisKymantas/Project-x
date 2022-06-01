import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuizDataSlice, IQuizData } from "state/types";

export const initialState: IQuizDataSlice = {
  quizData: [],
};

export const QuizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setUsers: (state, actions: PayloadAction<IQuizData[]>) => {
      state.quizData = actions.payload;
    },
  },
});

export const { setUsers } = QuizDataSlice.actions;
export default QuizDataSlice;
