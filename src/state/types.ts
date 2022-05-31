import { rootReducer } from "./store";

export interface IQuizAnswers {
  answers?: string | React.ReactNode;
}

export interface IQuizQuestions {
  answers?: IQuizAnswers[];
  title: string;
}

export interface IQuizData {
  question?: IQuizQuestions;
}
export interface IQuizDataSlice {
  quizData: IQuizData[];
}

export interface IUserData {
  age: number;
  height: number;
  weight: number;
  desiredWeight: number;
  feet: number;
  inches: number;
  isMale: boolean;
  email: string;
}
export interface IUserDataSlice {
  user_data: IUserData;
}

export interface IMultipleChoice {
  multiple_choice: string[];
  multiple_choiceGoals: string[];
}
export interface IPageination {
  value: number;
}

export interface IPurchaseData {
  id: number;
  month: string;
  newValue: number;
}
export interface IPurchaseDataSlice {
  purchase_data: IPurchaseData;
}

export interface IQuizAnswers {
  isWorkingOut: string;
  isSmoking: string;
  isAsthmatic: string;
  isHeartCondition: string;
}
export interface IQuizAnswersSlice {
  quiz_answers: IQuizAnswers;
}

export type AppState = ReturnType<typeof rootReducer>;
