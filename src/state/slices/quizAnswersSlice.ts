import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuizAnswersSlice, IQuizSingleAnswers } from "state/types";

export const initialState: IQuizAnswersSlice = {
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
    setIsWorkingOut: (state, actions: PayloadAction<IQuizSingleAnswers>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isWorkingOut: actions.payload,
      };
    },
    setIsSmoking: (state, actions: PayloadAction<IQuizSingleAnswers>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isSmoking: actions.payload,
      };
    },
    setIsAsthmatic: (state, actions: PayloadAction<IQuizSingleAnswers>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        isAsthmatic: actions.payload,
      };
    },
    setIsHeart: (state, actions: PayloadAction<IQuizSingleAnswers>) => {
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
