import {
  initialState,
  MultipleChoiceSlice,
  setMultipleChoice,
  setMultipleChoiceGoals,
  setMultipleReset,
} from "../slices/multipleChoiceSlice";

describe("user data reducer", () => {
  const isMale = ["smoking", "diabetes"];
  const nullValue = [""] as unknown;

  it("dispatches setMultipleChoice array value correctly to initial state", () => {
    expect(
      MultipleChoiceSlice.reducer(initialState, setMultipleChoice(isMale))
    ).toEqual({ ...initialState, multiple_choice: isMale });
  });

  it("dispatches setMultipleChoiceGoals array value correctly to initial state", () => {
    expect(
      MultipleChoiceSlice.reducer(initialState, setMultipleChoiceGoals(isMale))
    ).toEqual({ ...initialState, multiple_choiceGoals: isMale });
  });

  it("dispatches setMultipleReset and resets initial state", () => {
    expect(
      MultipleChoiceSlice.reducer(initialState, setMultipleReset(nullValue))
    ).toEqual({
      ...initialState,
      multiple_choiceGoals: nullValue,
      multiple_choice: nullValue,
    });
  });
});
