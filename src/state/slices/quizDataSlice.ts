import { createSlice } from "@reduxjs/toolkit";
import { IQuizData } from "state/types";

export const initialState: IQuizData = {
  quizData: [],
  status: "okay",
};

export const QuizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setUsers: (state, actions) => {
      state.quizData = actions.payload;
    },
    setStatus: (state, actions) => {
      state.status = actions.payload;
    },
  },
});

export const { setStatus, setUsers } = QuizDataSlice.actions;
export default QuizDataSlice;
