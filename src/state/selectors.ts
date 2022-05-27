import { AppState } from "./types";

export const selectPage = (state: AppState) => state.pageination.value;
export const selectMultipleChoice = (state: AppState) =>
  state.question.multiple_choice;
export const selectMultipleChoiceGoals = (state: AppState) =>
  state.question.multiple_choiceGoals;
export const selectQuizAnswers = (state: AppState) =>
  state.quizAnswers.quiz_answers;
export const selectQuizData = (state: AppState) => state.quizData.quizData;
export const selectPurchaseData = (state: AppState) =>
  state.purchaseData.purchase_data;
export const selectUserData = (state: AppState) => state.userData.user_data;
