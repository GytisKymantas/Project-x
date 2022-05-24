import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

const initialState = {
  user_data: {
    age: null as unknown as number,
    height: null as unknown as number,
    weight: null as unknown as number,
    desiredWeight: null as unknown as number,
    feet: null as unknown as number,
    inches: null as unknown as number,
    isMale: null as unknown as boolean,
  },
};

const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, actions: PayloadAction<any>) => {
      state.user_data = { ...state.user_data, ...actions.payload };
    },
    setGenderData: (state, actions: PayloadAction<any>) => {
      state.user_data = { ...state.user_data, isMale: actions.payload };
    },
  },
});

export const { setUserData, setGenderData } = UserDataSlice.actions;
export default UserDataSlice;
