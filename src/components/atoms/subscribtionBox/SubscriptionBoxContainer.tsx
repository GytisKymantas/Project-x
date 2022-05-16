import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import React from "react";
import { Box } from "../wrappers/Box";
import { SubscriptionBox } from "./SubscriptionBox";

export const SubscriptionBoxContainer: React.FC = () => {
  return (
    <Box>
      {SUBSCRIPTION_DETAILS.map(
        ({ discount, month, monthlyValue, oldValue, newValue, billed }) => (
          <SubscriptionBox
            discount={discount}
            month={month}
            monthlyValue={monthlyValue}
            oldValue={oldValue}
            newValue={newValue}
            billed={billed}
          />
        )
      )}
    </Box>
  );
};
