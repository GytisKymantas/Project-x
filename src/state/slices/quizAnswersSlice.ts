import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";
import { IQuizAnswers } from "state/types";

export const initialState: IQuizAnswers = {
  quiz_answers: {
    isWorkingOut: "",
    isSmoking: "",
    isAsthmatic: "",
    isHeartCondition: "",
  },
};

export const QuizAnswersSlice = createSlice({
  name: "quizAnswers",
  initialState,
  reducers: {
    setIsWorkingOut: (state, actions) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isWorkingOut: actions.payload,
      };
    },
    setIsSmoking: (state, actions) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isSmoking: actions.payload,
      };
    },
    setIsAsthmatic: (state, actions) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isAsthmatic: actions.payload,
      };
    },
    setIsHeart: (state, actions) => {
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
