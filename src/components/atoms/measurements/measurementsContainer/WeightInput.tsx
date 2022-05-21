import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

interface WeightInputProps {
  setStateValue: (e) => void;
  imperial?: boolean;
  value?: string;
}

export const WeightInput: React.FC<WeightInputProps> = ({
  setStateValue,
  imperial,
  value,
}) => {
  return (
    <FlexWrapper
      width="100%"
      justifyContent="space-between"
      position="relative"
    >
      <Input
        type="number"
        placeholder="Weight"
        required
        value={value}
        onChange={(e) => setStateValue(e.target.value)}
        minValue={10}
        maxValue={230}
      />
      <Box mt="17px" position="absolute" right="0">
        {imperial ? (
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            lb
          </Typography>
        ) : (
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            kg
          </Typography>
        )}
      </Box>
    </FlexWrapper>
  );
};
