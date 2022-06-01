import React, { useState } from "react";
import {
  Box,
  FlexWrapper,
  Image,
  SubscriptionBox,
  QuizAnswer,
} from "components";
import { SUBSCRIPTION_DETAILS } from "constants/Constants";
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";
import { theme } from "styles/theme";
import { setPurchaseData } from "state/slices/purchaseDataSlice";
import styled from "styled-components/macro";
import { IPurchaseData } from "state/types";

export const SubscriptionBoxContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<IPurchaseData>({
    id: null as unknown as number,
    month: "",
    newValue: null as unknown as string,
  });

  const handleSubscription = () => {
    dispatch(setPurchaseData(selectedUser));
    navigate("/success");
  };

  return (
    <FlexWrapper
      alignItems="center"
      flexDirection="column"
      gap="0.9375rem"
      id="Plans"
      mt="s50"
    >
      {SUBSCRIPTION_DETAILS.map(
        ({ billed, discount, id, month, monthlyValue, newValue, oldValue }) => (
          <Subscription
            borderRadius="br14"
            border={
              selectedUser.id === id
                ? `2px solid ${theme.colors.orange}`
                : `2px solid ${theme.colors.lightwhite}`
            }
            key={id}
            onClick={() => setSelectedUser({ id, month, newValue })}
            p="s16"
            width="22.5rem"
          >
            <SubscriptionBox
              billed={billed}
              discount={discount}
              month={month}
              id={id}
              key={id}
              monthlyValue={monthlyValue}
              newValue={newValue}
              oldValue={oldValue}
              selectedUserId={selectedUser.id}
            />
          </Subscription>
        )
      )}
      {selectedUser.id ? (
        <QuizAnswer onClick={handleSubscription}>Purchase</QuizAnswer>
      ) : (
        <QuizAnswer disabled isSubmit onClick={handleSubscription}>
          Purchase
        </QuizAnswer>
      )}
      <Image src="checkOut" />
    </FlexWrapper>
  );
};

const Subscription = styled(Box)`
  cursor: pointer;
`;
