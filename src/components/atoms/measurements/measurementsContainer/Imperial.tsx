import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

interface ImperialInputProps {
  setStateValueFeet: (e) => void;
  setStateValueInches: (e) => void;
}

export const Imperial: React.FC<ImperialInputProps> = ({
  setStateValueFeet,
  setStateValueInches,
}) => {
  return (
    <FlexWrapper gap="26px">
      <FlexWrapper
        width="100%"
        justifyContent="space-between"
        position="relative"
      >
        <Input
          type="number"
          placeholder="Height"
          min={4}
          max={8}
          required
          onChange={(e) => setStateValueFeet(e.target.value)}
          width="162px"
        />
        <Box mt="17px" position="absolute" right="0">
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            ft
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper
        width="100%"
        justifyContent="space-between"
        position="relative"
      >
        <Input
          type="number"
          placeholder="Inches"
          width="162px"
          min={0}
          max={11}
          required
          onChange={(e) => setStateValueInches(e.target.value)}
        />
        <Box mt="17px" position="absolute" right="0">
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            in
          </Typography>
        </Box>
      </FlexWrapper>
    </FlexWrapper>
  );
};
