import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserDataSlice, IUserData } from "state/types";

export const initialState: IUserDataSlice = {
  user_data: {
    age: null as unknown as number,
    height: null as unknown as number,
    weight: null as unknown as number,
    desiredWeight: null as unknown as number,
    feet: null as unknown as number,
    inches: null as unknown as number,
    isMale: "",
    email: "",
  },
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, actions: PayloadAction<IUserData>) => {
      state.user_data = { ...state.user_data, ...actions.payload };
    },
    setGenderData: (state, actions: PayloadAction<string>) => {
      state.user_data = { ...state.user_data, isMale: actions.payload };
    },
  },
});

export const { setUserData, setGenderData } = UserDataSlice.actions;
export default UserDataSlice;
