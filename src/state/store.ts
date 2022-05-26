import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import PurchaseDataSlice from "./slices/purchaseDataSlice";
import MultipleChoiceSlice from "./slices/multipleChoiceSlice";
import PageSlice from "./slices/pageSlice";
import QuizAnswersSlice from "./slices/quizAnswersSlice";
import QuizDataSlice from "./slices/quizDataSlice";
import UserDataSlice from "./slices/userDataSlice";
import {
  IQuizData,
  IQuizAnswers,
  IPageination,
  IMultipleChoice,
  IPurchaseData,
  IUserDataSlice,
} from "./types";

export interface RootState {
  purchaseData: IPurchaseData;
  pageination: IPageination;
  quizAnswers: IQuizAnswers;
  quizData: IQuizData;
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

const persistConfig = {
  key: "user_data",
  storage: sessionStorage,
  blacklist: ["config"],
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
