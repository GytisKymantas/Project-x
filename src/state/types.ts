import { rootReducer } from "./store";

export interface IQuizAnswers {
  answers?: string | React.ReactNode;
}

export interface IQuizQuestions {
  answers?: IQuizAnswers[];
  title: string;
  // title: string;
}
export interface IQuizQuestionDetails {
  question: IQuizQuestions;
}

export interface IQuizData {
  question?: IQuizQuestions;
  quizData: IQuizQuestionDetails[];
}
export interface IQuestionQuizData {
  question: string[];
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
