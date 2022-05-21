import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

interface DesiredWeightInputProps {
  setStateValue: (e) => void;
  imperial?: boolean;
  value?: number;
}

export const DesiredWeightInput: React.FC<DesiredWeightInputProps> = ({
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
        placeholder="Desired Weight"
        required
        value={value}
        onChange={(e) => setStateValue(e.target.value)}
        minValue={30}
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
