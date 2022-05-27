import { createSlice } from "@reduxjs/toolkit";
import { IPurchaseData } from "state/types";

export const initialState: IPurchaseData = {
  purchase_data: {
    id: null as unknown as number,
    month: "",
    newValue: null as unknown as number,
  },
};

export const PurchaseDataSlice = createSlice({
  name: "purchaseData",
  initialState,
  reducers: {
    setPurchaseData: (state, actions) => {
      state.purchase_data = actions.payload;
    },
  },
});

export const { setPurchaseData } = PurchaseDataSlice.actions;
export default PurchaseDataSlice;
