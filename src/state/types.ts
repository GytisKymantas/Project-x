import { rootReducer } from "./store";

export enum Foods {
  GRYBAI = "grybukai",
  BURGERIUKAI = "burgeriuksai",
  CEPAI = "cepelinai",
  SALDUMYNAI = "sokoladai",
}

export interface Foodies {
  id: number;
  title: string;
}

export interface QuizAnswers {
  question_key: string;
  question_key2: string;
  question_key3: string;
}
export interface UserState {
  user_data: any;
  quiz_answers: any; // type of answers keys and values
  // multiple_choice: any;
  // email: string
}

export type AppState = ReturnType<typeof rootReducer>;
