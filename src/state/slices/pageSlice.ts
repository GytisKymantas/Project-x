import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

export const initialState = { value: 0 };

export const PageSlice = createSlice({
  name: "pageination",
  initialState,
  reducers: {
    pageNext(state) {
      state.value++;
    },
    pageBack(state) {
      if (state.value > 0) {
        state.value--;
      }
    },
    pageReset(state) {
      state.value = 0;
    },
  },
});

export const { pageReset, pageNext, pageBack } = PageSlice.actions;
export default PageSlice;
