import { Foods, QuizAnswers } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Foodies } from "./types";

const initialState = {
  user_data: {
    id: null as unknown as number,
    title: "",
  },
  quiz_answers: {
    quizAnswer: "",
    quizAnswer2: "",
    quizAnswer3: "",
    quizAnswer4: "",
    quizAnswer5: "",
    quizAnswer6: {},
  },
  multiple_choice: {},
  multiple_choiceGoals: {},
};

console.log(initialState.user_data);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, actions: PayloadAction<any>) => {
      state.user_data = { ...state.user_data, ...actions.payload };
    },
    setMultipleChoice: (state, actions: any) => {
      state.multiple_choice = { ...state.multiple_choice, ...actions.payload };
    },
    setMultipleChoiceGoals: (state, actions: any) => {
      state.multiple_choiceGoals = {
        ...state.multiple_choiceGoals,
        ...actions.payload,
      };
    },
    setQuizAnswers: (state, actions: PayloadAction<any>) => {
      state.quiz_answers = {
        ...state.quiz_answers,
        ...actions.payload,
      };
    },
  },
});

export const {
  setMultipleChoiceGoals,
  setMultipleChoice,
  setUserData,
  setQuizAnswers,
} = userSlice.actions;
export default userSlice;

//OLD-FASHIONED REDUCER
// import { Foods } from './types';
// import { AnyAction } from 'redux';
// import { SET_QUIZ_ANSWERS, SET_USER_DATA } from './constants';

// const initialState = {
// 	user_data: {
// 		id: null as unknown as number,
// 		name: '',
// 		food: null as unknown as Foods,
// 	},
// 	quiz_answers: {
// 		question_key: false,
// 		question_key2: '',
// 		question_key3: null,
// 	},
// };

// const userReducer = (state = initialState, action: AnyAction) => {
// 	switch (action.type) {
// 		case SET_USER_DATA:
// 			return (state.user_data = action.payload);
// 		case SET_QUIZ_ANSWERS:
// 			return (state.quiz_answers = {
// 				...state.quiz_answers,
// 				...action.payload,
// 			});
// 		default:
// 			return state;
// 	}
// };

// export default userReducer;
