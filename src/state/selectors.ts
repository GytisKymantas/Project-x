import { AppState } from "./types";

// export const selectUserData = (state: AppState) => state.user.user_data;
// export const selectQuizAnswers = (state: AppState) => state.user.quiz_answers;
// export const selectMultipleAnswers = (state: any) => state.user.multiple_choice;
// export const selectPurchaseData = (state: any) => state.user.purchase_data;
// export const selectMultipleAnswersGoals = (state: any) =>
//   state.user.multiple_choiceGoals;
// export const selectState = (state: any) => state.user;
// export const selectUsers = (state: any) => state.user.quizData;

export const selectPage = (state: any) => state.pageination.value;
export const selectMultipleChoice = (state: any) =>
  state.question.multiple_choice;
export const selectMultipleChoiceGoals = (state: any) =>
  state.question.multiple_choiceGoals;
export const selectQuizAnswers = (state: any) => state.quizAnswers.quiz_answers;
export const selectQuizData = (state: any) => state.quizData.quizData;
export const selectPurchaseData = (state: any) =>
  state.purchaseData.purchase_data;
export const selectUserData = (state: any) => state.userData.user_data;
