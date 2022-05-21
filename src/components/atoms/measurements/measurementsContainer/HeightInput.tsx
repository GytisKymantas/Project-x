import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

interface HeightInputProps {
  setStateValue: (e) => void;
}

export const HeightInput: React.FC<HeightInputProps> = ({ setStateValue }) => {
  return (
    <FlexWrapper
      width="100%"
      justifyContent="space-between"
      position="relative"
    >
      <Input
        type="number"
        placeholder="Height"
        width="100%"
        onChange={(e) => setStateValue(e.target.value)}
        required
        minValue={100}
        maxValue={230}
      />
      <Box mt="17px" position="absolute" right="0">
        <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
          cm
        </Typography>
      </Box>
    </FlexWrapper>
  );
};
