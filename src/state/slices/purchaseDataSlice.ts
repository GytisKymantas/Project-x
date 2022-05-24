import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { IStepState } from "state/types";

const initialState = {
  purchase_data: {
    id: null as unknown as number,
    month: "",
    newValue: null as unknown as number,
  },
};

const PurchaseDataSlice = createSlice({
  name: "purchaseData",
  initialState,
  reducers: {
    setPurchaseData: (state, actions: PayloadAction<any>) => {
      state.purchase_data = actions.payload;
    },
  },
});

export const { setPurchaseData } = PurchaseDataSlice.actions;
export default PurchaseDataSlice;
