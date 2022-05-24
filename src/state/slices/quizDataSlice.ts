import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

const initialState = {
  quizData: [],
  status: "idle",
};

const QuizDataSlice = createSlice({
  name: "quizData",
  initialState,
  reducers: {
    setUsers: (state, actions: PayloadAction<any["users"]>) => {
      state.quizData = actions.payload;
    },
    setStatus: (state, actions: PayloadAction<any["status"]>) => {
      state.status = actions.payload;
    },
  },
});

export const { setUsers, setStatus } = QuizDataSlice.actions;
export default QuizDataSlice;
