import React, { useState, useEffect } from "react";
import { Box, Typography, FlexWrapper } from "components";
import styled from "styled-components/macro";
import { Check, CheckBlank } from "assets/images";
import { theme } from "styles/theme";
import { selectUserData } from "state/selectors";

interface SubscriptionBoxProps {
  discount: string;
  month: string;
  monthlyValue: string;
  selectedUserId: number;
  oldValue?: string;
  newValue?: string;
  billed: string;
  id: number;
}

export const SubscriptionBox: React.FC<SubscriptionBoxProps> = ({
  discount,
  month,
  monthlyValue,
  selectedUserId,
  oldValue,
  newValue,
  billed,
  id,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  // const [selectedUser, setSelectedUser] = useState({
  //   id: null as unknown as number,
  // });

  // useEffect(() => {
  //   setIsSelected(!isSelected);
  // }, [selectedUser]);

  return (
    <>
      <FlexWrapper alignItems="center" gap="0.5rem">
        <Typography color="primary">{month}</Typography>
        <Box bg="taxi" p="s5">
          <Typography fontWeight="fw700" color="primary">
            {discount}
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper alignItems="center" gap="8px" pt="s18">
        <Typography fontWeight="fw700" fontSize="fs20" color="primary">
          {monthlyValue}
        </Typography>
        <FlexWrapper justifyContent="space-between" width="100%">
          <Box>
            <Typography color="primary">/month</Typography>
          </Box>
          {selectedUserId === id ? <Check /> : <CheckBlank />}
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper alignItems="center" gap="8px" pt="s18">
        <Typography fontWeight="fw700" fontSize="fs20" color="orange">
          <CrossedPrice>{oldValue}</CrossedPrice>
          {newValue}
        </Typography>
        <Box>
          <Typography color="primary">{billed}</Typography>
        </Box>
      </FlexWrapper>
    </>
  );
};

const CrossedPrice = styled.s`
  color: ${theme.colors.primary};
  margin-right: 0.3125rem;
`;
