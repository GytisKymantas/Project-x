import React, { useState } from "react";
import { Box, Typography, FlexWrapper } from "components";
import styled from "styled-components/macro";
import { Check, CheckBlank } from "assets/images";
import { theme } from "styles/theme";

interface SubscriptionBoxProps {
  discount: string;
  month: string;
  monthlyValue: string;
  oldValue?: string;
  newValue?: string;
  billed: string;
  id?: string;
}

export const SubscriptionBox: React.FC<SubscriptionBoxProps> = ({
  discount,
  month,
  monthlyValue,
  oldValue,
  newValue,
  billed,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Box
      borderRadius="br14"
      border={isSelected ? "2px solid orange" : "2px solid rgba(0, 0, 0, 0.08)"}
      width="22.5rem"
      onClick={() => setIsSelected(!isSelected)}
      p="s16"
    >
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
          {isSelected ? <Check /> : <CheckBlank />}
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
    </Box>
  );
};

const CrossedPrice = styled.s`
  color: ${theme.colors.primary};
  margin-right: 0.3125rem;
`;
