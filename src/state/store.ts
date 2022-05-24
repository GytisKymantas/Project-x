import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { UserState } from "./types";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import sessionStorage from "redux-persist/es/storage/session";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import PurchaseDataSlice from "./slices/purchaseDataSlice";
import MultipleChoiceSlice from "./slices/multipleChoiceSlice";
import PageSlice from "./slices/pageSlice";
import QuizAnswersSlice from "./slices/quizAnswersSlice";
// import userSlice from "./slice";
import QuizDataSlice from "./slices/quizDataSlice";
import UserDataSlice from "./slices/userDataSlice";

export interface RootState {
  purchaseData: any;
  pageination: any;
  quizAnswers: any;
  quizData: any;
  question: any;
  userData: any;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  // user: userSlice.reducer,
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
