import { Foods, QuizAnswers } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { Foodies } from "./types";

const initialState = {
  user_data: {
    // id: null as unknown as number,
    age: null as unknown as number,
    height: null as unknown as number,
    weight: null as unknown as number,
    desiredWeight: null as unknown as number,
    feet: null as unknown as number,
    inches: null as unknown as number,
    isMale: null as unknown as boolean,
  },
  quiz_answers: {
    isWorkingOut: "",
    isSmoking: "",
    isAsthmatic: "",
    isHeartCondition: "",
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
      state.user_data = actions.payload;
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

export const {
  setIsHeart,
  setIsAsthmatic,
  setIsSmoking,
  setIsWorkingOut,
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
