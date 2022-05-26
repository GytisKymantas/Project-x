import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import {
  metricBMIcalculator,
  heightToInches,
  imperialBMIcalculator,
} from "utils/metrics";

export const BMI: React.FC = () => {
  const userData = useSelector(selectUserData);
  // console.log(userData, "user data");
  const BMIrounded = metricBMIcalculator(userData.weight, userData.height);
  const heightInches = heightToInches(userData.feet, userData.inches);
  const imperialBMIrounded = imperialBMIcalculator(
    userData.weight,
    heightInches
  );

  //TODO: fix the bug
  console.log(BMIrounded, "bmi rounded");
  console.log(heightInches, "this is imp bmi");
  console.log(imperialBMIrounded, "BMI imperial");

  return (
    <Box
      bg="white"
      width="15.625rem"
      margin="s0auto"
      boxShadow="default"
      py="s10"
      px="s5"
    >
      <FlexWrapper flexDirection="column" gap="20px">
        <FlexWrapper
          justifyContent={
            (BMIrounded !== Infinity && BMIrounded > 25.0) ||
            (imperialBMIrounded !== Infinity && imperialBMIrounded > 25.0)
              ? "space-around"
              : "flex-end"
          }
        >
          {BMIrounded !== Infinity && BMIrounded > 25.0 && (
            <Typography type="h5" color="white">
              BMI: {BMIrounded}%
            </Typography>
          )}
          {imperialBMIrounded !== Infinity && imperialBMIrounded > 25.0 && (
            <Typography type="h5" color="white">
              BMI: {imperialBMIrounded}%
            </Typography>
          )}
          <Typography type="h5" color="primary">
            Overweight
          </Typography>
        </FlexWrapper>

        <FlexWrapper
          justifyContent={
            (BMIrounded !== Infinity && BMIrounded > 19 && BMIrounded < 24.9) ||
            (imperialBMIrounded !== Infinity &&
              imperialBMIrounded > 19 &&
              imperialBMIrounded < 24.9)
              ? "space-around"
              : "flex-end"
          }
        >
          {BMIrounded !== Infinity && BMIrounded < 24.9 && (
            <Typography type="h5" color="primary">
              BMI: {BMIrounded}%
            </Typography>
          )}
          {imperialBMIrounded !== Infinity && imperialBMIrounded < 24.9 && (
            <Typography type="h5" color="primary">
              BMI: {imperialBMIrounded}%
            </Typography>
          )}
          <Typography type="h5" color="primary">
            Normal
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          justifyContent={
            (BMIrounded !== Infinity && BMIrounded < 19) ||
            (imperialBMIrounded !== Infinity && imperialBMIrounded < 19)
              ? "space-around"
              : "flex-end"
          }
        >
          {BMIrounded !== Infinity && BMIrounded < 19 && (
            <Typography type="h5" color="primary">
              BMI: {BMIrounded}%
            </Typography>
          )}
          {imperialBMIrounded !== Infinity && imperialBMIrounded < 19 && (
            <Typography type="h5" color="primary">
              BMI: {imperialBMIrounded}%
            </Typography>
          )}
          <Typography type="h5" color="primary">
            Underweight
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </Box>
  );
};
