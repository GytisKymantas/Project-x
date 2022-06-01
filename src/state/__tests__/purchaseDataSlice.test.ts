import { IPurchaseData } from "state/types";
import {
  initialState,
  PurchaseDataSlice,
  setPurchaseData,
} from "../slices/purchaseDataSlice";

// interface bam {
//   value: IPurchaseData;
// }
describe("Purchase data reducer", () => {
  it("dispatches setPurchaseData value correctly to initial state", () => {
    const value = {
      id: 1 as number,
      month: "January" as string,
      newValue: "32$" as string,
    };

    expect(
      PurchaseDataSlice.reducer(initialState, setPurchaseData(value))
    ).toEqual({ purchase_data: value });
  });
});
