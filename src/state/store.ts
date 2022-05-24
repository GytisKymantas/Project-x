import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, CombinedState, AnyAction } from "redux";
import userSlice from "./slice";
import { useDispatch } from "react-redux";
import { UserState } from "./types";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import sessionStorage from "redux-persist/es/storage/session";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

export interface RootState {
  user: UserState;
  //funnel: FunnelState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  user: userSlice.reducer,
  //funnel: funnelReducer
  //layouts: layoutsReducer
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
