// import {
//   initialState,
//   setMultipleChoice,
//   setMultipleChoiceGoals,
//   MultipleChoiceSlice,
// } from "../slices/multipleChoiceSlice";

// describe("Multiple choice answer reducer", () => {
//   it("dispatches setMultipleChoice value correctly to initial state", () => {
//     const value = ["value1", "value2"];
//     expect(
//       MultipleChoiceSlice.reducer(initialState, setMultipleChoice({ value }))
//     ).toEqual({ ...initialState, multiple_choice: { value } });
//   });

//   it("should return initial state", () => {
//     expect(MultipleChoiceSlice.reducer(undefined, setMultipleChoice)).toEqual(
//       initialState
//     );
//   });
// });

// describe("Multiple choice Goals answer reducer", () => {
//   it("dispatches setMultipleChoice value correctly to initial state", () => {
//     const value = ["value1", "value2"];
//     expect(
//       MultipleChoiceSlice.reducer(
//         initialState,
//         setMultipleChoiceGoals({ value })
//       )
//     ).toEqual({ ...initialState, multiple_choiceGoals: { value } });
//   });

//   it("should return initial state", () => {
//     expect(
//       MultipleChoiceSlice.reducer(undefined, setMultipleChoiceGoals)
//     ).toEqual(initialState);
//   });
// });
