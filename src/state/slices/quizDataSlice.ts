import { createSlice } from "@reduxjs/toolkit";
import { IQuizDataSlice } from "state/types";

export const initialState: IQuizDataSlice = {
  quizData: [],
};

export const QuizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setUsers: (state, actions) => {
      state.quizData = actions.payload;
    },
  },
});

export const { setUsers } = QuizDataSlice.actions;
export default QuizDataSlice;
