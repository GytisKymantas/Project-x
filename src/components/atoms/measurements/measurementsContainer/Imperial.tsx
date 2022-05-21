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
        borderBottom="1px solid black"
        justifyContent="space-between"
      >
        <Input
          type="number"
          placeholder="Height"
          onChange={(e) => setStateValueFeet(e.target.value)}
          width="162px"
        />
        <Box mt="17px">
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            Ft
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper
        width="100%"
        borderBottom="1px solid black"
        justifyContent="space-between"
      >
        <Input
          type="number"
          placeholder="Inches"
          width="162px"
          onChange={(e) => setStateValueInches(e.target.value)}
        />
        <Box mt="17px">
          <Typography color="primary" fontFamily="Satisfy" fontSize="15px">
            in
          </Typography>
        </Box>
      </FlexWrapper>
    </FlexWrapper>
  );
};
