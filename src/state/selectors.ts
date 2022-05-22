import { AppState } from "./types";

export const selectUserData = (state: AppState) => state.user.user_data;
export const selectQuizAnswers = (state: AppState) => state.user.quiz_answers;
export const selectMultipleAnswers = (state: any) => state.user.multiple_choice;
export const selectPurchaseData = (state: any) => state.user.purchase_data;
export const selectMultipleAnswersGoals = (state: any) =>
  state.user.multiple_choiceGoals;
export const selectState = (state: any) => state.user;
