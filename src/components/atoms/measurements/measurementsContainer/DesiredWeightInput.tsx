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
  setStateValue: (e: React.FormEvent<HTMLInputElement>) => void;
  imperial?: boolean;
  value?: number;
}
//TODO:Value
export const DesiredWeightInput: React.FC<DesiredWeightInputProps> = ({
  setStateValue,
  imperial,
  value,
}) => (
  <FlexWrapper width="100%" justifyContent="space-between" position="relative">
    <Input
      type="number"
      placeholder="Desired Weight"
      required
      value={value}
      onChange={(e) => setStateValue(e.target.value)}
      minValue={30}
      maxValue={230}
    />
    <Box mt="s16" position="absolute" right="0">
      {imperial ? (
        <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
          lb
        </Typography>
      ) : (
        <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
          kg
        </Typography>
      )}
    </Box>
  </FlexWrapper>
);
