import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

const initialState = {
  quiz_answers: {
    isWorkingOut: "",
    isSmoking: "",
    isAsthmatic: "",
    isHeartCondition: "",
  },
};

const QuizAnswersSlice = createSlice({
  name: "quizAnswers",
  initialState,
  reducers: {
    setIsWorkingOut: (state, actions: PayloadAction<any>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isWorkingOut: actions.payload,
      };
    },
    setIsSmoking: (state, actions: PayloadAction<any>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isSmoking: actions.payload,
      };
    },
    setIsAsthmatic: (state, actions: PayloadAction<any>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isAsthmatic: actions.payload,
      };
    },
    setIsHeart: (state, actions: PayloadAction<any>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isHeartCondition: actions.payload,
      };
    },
  },
});

export const { setIsWorkingOut, setIsSmoking, setIsAsthmatic, setIsHeart } =
  QuizAnswersSlice.actions;
export default QuizAnswersSlice;
