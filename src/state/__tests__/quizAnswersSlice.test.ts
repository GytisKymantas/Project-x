import {
  initialState,
  QuizAnswersSlice,
  setIsWorkingOut,
  setIsHeart,
  setIsAsthmatic,
  setIsSmoking,
} from "../slices/quizAnswersSlice";

describe("Quiz data reducer", () => {
  it("dispatches setIsWorkingOut value correctly to initial state", () => {
    const value = "test value";
    expect(
      QuizAnswersSlice.reducer(initialState, setIsWorkingOut(value))
    ).toEqual({
      quiz_answers: { ...initialState.quiz_answers, isWorkingOut: value },
    });
  });
  it("dispatches setIsHeart value correctly to initial state", () => {
    const value = "test value";
    expect(QuizAnswersSlice.reducer(initialState, setIsHeart(value))).toEqual({
      quiz_answers: { ...initialState.quiz_answers, isHeartCondition: value },
    });
  });
  it("dispatches setIsSmoking value correctly to initial state", () => {
    const value = "test value";
    expect(QuizAnswersSlice.reducer(initialState, setIsSmoking(value))).toEqual(
      {
        quiz_answers: { ...initialState.quiz_answers, isSmoking: value },
      }
    );
  });
  it("dispatches setIsAsthmatic value correctly to initial state", () => {
    const value = "test value";
    expect(
      QuizAnswersSlice.reducer(initialState, setIsAsthmatic(value))
    ).toEqual({
      quiz_answers: { ...initialState.quiz_answers, isAsthmatic: value },
    });
  });
});
