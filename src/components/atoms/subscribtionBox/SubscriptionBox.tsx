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
      maxWidth="360px"
      onClick={() => setIsSelected(!isSelected)}
      p="16px"
    >
      <FlexWrapper alignItems="center" gap="8px">
        <Typography color="Primary">{month}</Typography>
        <Box bg="taxi" p="5px">
          <Typography fontWeight={700} color="primary">
            {discount}
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper alignItems="center" gap="8px" pt="18px">
        <Typography fontWeight={700} fontSize="20px" color="Primary">
          {monthlyValue}
        </Typography>
        <FlexWrapper justifyContent="space-between" width="100%">
          <Box>
            <Typography color="primary">/month</Typography>
          </Box>
          {isSelected ? <Check /> : <CheckBlank />}
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper alignItems="center" gap="8px" pt="18px">
        <Typography fontWeight={700} fontSize="20px" color="orange">
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
  color: black;
  margin-right: 5px;
`;
