import { initialState, QuizDataSlice, setUsers } from "../slices/quizDataSlice";

describe("Quiz data reducer", () => {
  it("dispatches setUsers value correctly to initial state", () => {
    const value = [{ test: "value1" }];
    expect(QuizDataSlice.reducer(initialState, setUsers({ value }))).toEqual({
      ...initialState,
      quizData: { value },
    });
  });
});
