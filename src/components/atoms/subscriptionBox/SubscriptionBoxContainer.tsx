import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import React, { useState } from "react";
import { FlexWrapper, SubscriptionBox, Box } from "components";

export const SubscriptionBoxContainer: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState({
    id: null as unknown as number,
  });
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      gap="0.9375rem"
      mt="s50"
    >
      {SUBSCRIPTION_DETAILS.map(
        ({ discount, month, monthlyValue, oldValue, id, newValue, billed }) => (
          <Box
            borderRadius="br14"
            width="22.5rem"
            p="s16"
            border={
              selectedUser.id === id
                ? "2px solid orange"
                : "2px solid transparent"
            }
            onClick={() => setSelectedUser({ id })}
          >
            <SubscriptionBox
              discount={discount}
              month={month}
              key={id}
              id={id}
              selectedUserId={selectedUser.id}
              monthlyValue={monthlyValue}
              oldValue={oldValue}
              newValue={newValue}
              billed={billed}
            />
          </Box>
        )
      )}
    </FlexWrapper>
  );
};
