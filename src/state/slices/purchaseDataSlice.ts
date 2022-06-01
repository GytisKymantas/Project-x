import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPurchaseDataSlice, IPurchaseData } from "state/types";

export const initialState: IPurchaseDataSlice = {
  purchase_data: {
    id: null as unknown as number,
    month: "",
    newValue: "",
  },
};

export const PurchaseDataSlice = createSlice({
  name: "purchaseData",
  initialState,
  reducers: {
    setPurchaseData: (state, actions: PayloadAction<IPurchaseData>) => {
      state.purchase_data = actions.payload;
    },
  },
});

export const { setPurchaseData } = PurchaseDataSlice.actions;
export default PurchaseDataSlice;
