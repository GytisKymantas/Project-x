import { rootReducer } from "./store";

export interface IQuizData {
  quizData: string[];
  status: string;
}
export interface IQuestionQuizData {
  question: string[];
  // title: string;
  // answers: string[];
  // id: number;
  page: number;
}
export interface IUserDataSlice {
  user_data: {
    age: number;
    height: number;
    weight: number;
    desiredWeight: number;
    feet: number;
    inches: number;
    isMale: boolean;
  };
}

export interface IMultipleChoice {
  multiple_choice: string[];
  multiple_choiceGoals: string[];
}
export interface IPageination {
  value: number;
}

export interface IPurchaseData {
  purchase_data: {
    id: number;
    month: string;
    newValue: number;
  };
}

export interface IQuizAnswers {
  quiz_answers: {
    isWorkingOut: string;
    isSmoking: string;
    isAsthmatic: string;
    isHeartCondition: string;
  };
}

export type AppState = ReturnType<typeof rootReducer>;
