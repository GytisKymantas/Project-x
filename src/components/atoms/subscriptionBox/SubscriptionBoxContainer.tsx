import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import React from "react";
import { Box } from "../wrappers/Box";
import { FlexWrapper } from "../wrappers/FlexWrapper";
import { SubscriptionBox } from "./SubscriptionBox";

export const SubscriptionBoxContainer: React.FC = () => {
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      gap="15px"
      mt="50px"
    >
      {SUBSCRIPTION_DETAILS.map(
        ({ discount, month, monthlyValue, oldValue, id, newValue, billed }) => (
          <SubscriptionBox
            discount={discount}
            month={month}
            key={id}
            monthlyValue={monthlyValue}
            oldValue={oldValue}
            newValue={newValue}
            billed={billed}
          />
        )
      )}
    </FlexWrapper>
  );
};
