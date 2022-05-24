import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  user_data: {
    age: null as unknown as number,
    height: null as unknown as number,
    weight: null as unknown as number,
    desiredWeight: null as unknown as number,
    feet: null as unknown as number,
    inches: null as unknown as number,
    isMale: null as unknown as boolean,
  },
  purchase_data: {
    id: null as unknown as number,
    month: "",
    newValue: null as unknown as number,
  },
  quiz_answers: {
    isWorkingOut: "",
    isSmoking: "",
    isAsthmatic: "",
    isHeartCondition: "",
  },
  multiple_choice: {},
  multiple_choiceGoals: {},
  quizData: [],
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, actions: PayloadAction<any>) => {
      state.user_data = { ...state.user_data, ...actions.payload };
    },
    setGenderData: (state, actions: PayloadAction<any>) => {
      state.user_data = { ...state.user_data, isMale: actions.payload };
    },
    setMultipleChoice: (state, actions: PayloadAction<any>) => {
      state.multiple_choice = { ...state.multiple_choice, ...actions.payload };
    },
    setMultipleChoiceGoals: (state, actions: PayloadAction<any>) => {
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
    setPurchaseData: (state, actions: PayloadAction<any>) => {
      state.purchase_data = actions.payload;
    },
    setUsers: (state, actions: PayloadAction<any["users"]>) => {
      state.quizData = actions.payload;
    },
    setStatus: (state, actions: PayloadAction<any["status"]>) => {
      state.status = actions.payload;
    },
  },
});

export const {
  setUsers,
  setStatus,
  setGenderData,
  setPurchaseData,
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
