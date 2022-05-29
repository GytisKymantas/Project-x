import React, { useState } from "react";
import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import { useSelector, useDispatch } from "react-redux";
import { selectPurchaseData } from "state/selectors";
import { navigate } from "gatsby";
import { theme } from "styles/theme";
import { FlexWrapper, SubscriptionBox, Box, QuizAnswer } from "components";
import { setPurchaseData } from "state/slices/purchaseDataSlice";
import styled from "styled-components/macro";

export const SubscriptionBoxContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({
    id: null as unknown as number,
    month: "",
    newValue: null as unknown as string,
  });
  const purchaseData = useSelector(selectPurchaseData);

  const handleSubscription = () => {
    dispatch(setPurchaseData(selectedUser));
    navigate("/success");
  };

  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      gap="0.9375rem"
      mt="s50"
    >
      {SUBSCRIPTION_DETAILS.map(
        ({ discount, month, monthlyValue, oldValue, id, newValue, billed }) => (
          <Subscription
            borderRadius="br14"
            key={id}
            width="22.5rem"
            p="s16"
            border={
              selectedUser.id === id
                ? `2px solid ${theme.colors.orange}`
                : `2px solid ${theme.colors.lightwhite}`
            }
            onClick={() => setSelectedUser({ id, month, newValue })}
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
          </Subscription>
        )
      )}
      {selectedUser.id ? (
        <QuizAnswer mt="s50" onClick={handleSubscription}>
          Purchase
        </QuizAnswer>
      ) : (
        <QuizAnswer disabled isSubmit onClick={handleSubscription}>
          Purchase
        </QuizAnswer>
      )}
    </FlexWrapper>
  );
};

const Subscription = styled(Box)`
  cursor: pointer;
`;
