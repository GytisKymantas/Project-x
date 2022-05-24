import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

const initialState = { value: 0 };

const PageSlice = createSlice({
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
    // resetPage(state) {
    //   state.value = initialState.value;
    // },
    // chooseStep(state, action) {
    //   state.value = action.payload;
    // },
  },
});

export const { pageNext, pageBack } = PageSlice.actions;
export default PageSlice;
