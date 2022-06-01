import { IQuizData } from "state/types";
import { initialState, QuizDataSlice, setUsers } from "../slices/quizDataSlice";

describe("Quiz data reducer", () => {
  it("dispatches setUsers value correctly to initial state", () => {
    const value = ["value1"] as IQuizData[];
    expect(QuizDataSlice.reducer(initialState, setUsers(value))).toEqual({
      ...initialState,
      quizData: value,
    });
  });
});
