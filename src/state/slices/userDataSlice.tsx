import { createSlice } from "@reduxjs/toolkit";
import { IUserDataSlicer } from "state/types";

export const initialState: IUserDataSlicer = {
  user_data: {
    age: null as unknown as number,
    height: null as unknown as number,
    weight: null as unknown as number,
    desiredWeight: null as unknown as number,
    feet: null as unknown as number,
    inches: null as unknown as number,
    isMale: null as unknown as boolean,
    email: "" as string,
  },
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      state.user_data = { ...state.user_data, ...actions.payload };
    },
    setGenderData: (state, actions) => {
      state.user_data = { ...state.user_data, isMale: actions.payload };
    },
    setEmail: (state, actions) => {
      state.user_data = { ...state.user_data, isMale: actions.payload };
    },
  },
});

export const { setUserData, setEmail, setGenderData } = UserDataSlice.actions;
export default UserDataSlice;
