import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import React from "react";
import { FlexWrapper, SubscriptionBox } from "components";

export const SubscriptionBoxContainer: React.FC = () => (
  <FlexWrapper
    flexDirection="column"
    alignItems="center"
    gap="0.9375rem"
    mt="s50"
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
