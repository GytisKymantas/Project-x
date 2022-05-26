import {
  initialState,
  PageSlice,
  pageNext,
  pageBack,
} from "../slices/pageSlice";

describe("Quiz Page reducer", () => {
  it("adds a page value by 1", () => {
    expect(PageSlice.reducer(initialState, pageNext)).toEqual({ value: 1 });
  });

  it("removes a page value by 1", () => {
    expect(PageSlice.reducer(initialState, pageBack)).toEqual({ value: 0 });
  });
});
