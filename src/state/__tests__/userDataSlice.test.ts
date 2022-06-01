import {
  initialState,
  UserDataSlice,
  setUserData,
  setGenderData,
} from "../slices/userDataSlice";

describe("user data reducer", () => {
  const isMale = true;

  it("dispatches setGenderData value correctly to initial state", () => {
    expect(UserDataSlice.reducer(undefined, setUserData)).toEqual(initialState);
  });

  it("dispatches setGenderData value correctly to initial state", () => {
    expect(UserDataSlice.reducer(initialState, setGenderData(isMale))).toEqual(
      {}
    );
  });
});
