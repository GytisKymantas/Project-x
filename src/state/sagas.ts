import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { fetchUsersAction } from "./sagasActions";
import { setStatus, setUsers } from "./slices/quizDataSlice";

const url = "https://628204de9fac04c6540d8dbd.mockapi.io/Quiz";

export function* fetchUsersSaga() {
  try {
    const { data }: AxiosResponse = yield axios.get(url);
    yield put(setUsers(data));
    yield put(setUsers("false"));
  } catch (err) {
    yield console.log(err);
  }
}

export function* userSagas() {
  yield takeEvery(fetchUsersAction, fetchUsersSaga);
}
