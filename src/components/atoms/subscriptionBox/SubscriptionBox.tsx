import React from "react";
import { Check, CheckBlank } from "assets/images";
import { theme } from "styles/theme";
import { Box, Typography, FlexWrapper } from "components";
import styled from "styled-components/macro";

interface SubscriptionBoxProps {
  billed: string;
  discount: string;
  id: number;
  month: string;
  monthlyValue: string;
  newValue?: string | number;
  oldValue?: string | number;
  selectedUserId: number;
}

export const SubscriptionBox: React.FC<SubscriptionBoxProps> = ({
  billed,
  discount,
  id,
  month,
  monthlyValue,
  newValue,
  oldValue,
  selectedUserId,
}) => (
  <>
    <FlexWrapper alignItems="center" gap="0.5rem">
      <Typography color="primary">{month}</Typography>
      <Box bg="taxi" p="s5">
        <Typography color="primary" fontWeight="fw700">
          {discount}
        </Typography>
      </Box>
    </FlexWrapper>
    <FlexWrapper alignItems="center" gap="0.5rem" pt="s18">
      <Typography color="primary" fontWeight="fw700" fontSize="fs20">
        {monthlyValue}
      </Typography>
      <FlexWrapper justifyContent="space-between" width="100%">
        <Box>
          <Typography color="primary">/month</Typography>
        </Box>
        {selectedUserId === id ? <Check /> : <CheckBlank />}
      </FlexWrapper>
    </FlexWrapper>
    <FlexWrapper alignItems="center" gap="0.5rem" pt="s18">
      <Typography color="orange" fontWeight="fw700" fontSize="fs20">
        <CrossedPrice>{oldValue}</CrossedPrice>
        {newValue}
      </Typography>
      <Box>
        <Typography color="primary">{billed}</Typography>
      </Box>
    </FlexWrapper>
  </>
);

const CrossedPrice = styled.s`
  color: ${theme.colors.primary};
  margin-right: 0.3125rem;
`;
