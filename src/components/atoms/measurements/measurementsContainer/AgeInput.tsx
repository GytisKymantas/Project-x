import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

interface AgeInputProps {
  setStateValue: (e) => void;
  value?: number;
}

export const AgeInput: React.FC<AgeInputProps> = ({ setStateValue, value }) => {
  return (
    <FlexWrapper
      width="100%"
      position="relative"
      justifyContent="space-between"
    >
      <Input
        type="number"
        placeholder="Age"
        onChange={(e) => setStateValue(e.target.value)}
        // onChange={(e) => setAge(e.target.value)}
        required
        value={value}
        minValue={18}
        maxValue={100}
      />
      <Box mt="17px" position="absolute" right="0">
        <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
          years
        </Typography>
      </Box>
    </FlexWrapper>
  );
};
