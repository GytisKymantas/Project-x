import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import PurchaseDataSlice from "./slices/purchaseDataSlice";
import MultipleChoiceSlice from "./slices/multipleChoiceSlice";
import PageSlice from "./slices/pageSlice";
import QuizAnswersSlice from "./slices/quizAnswersSlice";
import QuizDataSlice from "./slices/quizDataSlice";
import UserDataSlice from "./slices/userDataSlice";
import {
  IQuizDataSlice,
  IPageination,
  IMultipleChoice,
  IPurchaseDataSlice,
  IUserDataSlice,
  IQuizAnswersSlice,
} from "./types";

export interface RootState {
  purchaseData: IPurchaseDataSlice;
  pageination: IPageination;
  quizAnswers: IQuizAnswersSlice;
  quizData: IQuizDataSlice;
  question: IMultipleChoice;
  userData: IUserDataSlice;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  userData: UserDataSlice.reducer,
  purchaseData: PurchaseDataSlice.reducer,
  pageination: PageSlice.reducer,
  quizAnswers: QuizAnswersSlice.reducer,
  quizData: QuizDataSlice.reducer,
  question: MultipleChoiceSlice.reducer,
});

export const rootReducer = (state: any, action: AnyAction) =>
  combinedReducer(state, action);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
