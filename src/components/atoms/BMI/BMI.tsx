import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import {
  heightToInches,
  imperialBMIcalculator,
  metricBMIcalculator,
} from "utils/metrics";

export const BMI: React.FC = () => {
  const userData = useSelector(selectUserData);
  const BMIrounded = metricBMIcalculator(userData.weight, userData.height);
  const heightInches = heightToInches(userData.feet, userData.inches);
  const imperialBMIrounded = imperialBMIcalculator(
    userData.weight,
    heightInches
  );

  return (
    <FlexWrapper
      alignItems="center"
      flexDirection="column"
      gap="1.5625rem"
      justifyContent="center"
    >
      <Box mb="s20">
        <Typography color="primary" fontWeight="fw700">
          Your Body Mass Index:
        </Typography>
      </Box>
      <Box
        bg="white"
        boxShadow="default"
        borderRadius="br24"
        margin="s0auto"
        mx="s20"
        py="s10"
        px="s5"
        width="20.625rem"
      >
        <FlexWrapper flexDirection="column" gap="1.25rem">
          <FlexWrapper
            borderRadius="br14"
            bg={
              (BMIrounded !== Infinity && BMIrounded >= 25) ||
              (imperialBMIrounded !== Infinity && imperialBMIrounded >= 25)
                ? "orange"
                : "transparent"
            }
            justifyContent={
              (BMIrounded !== Infinity && BMIrounded >= 25) ||
              (imperialBMIrounded !== Infinity && imperialBMIrounded >= 25)
                ? "space-around"
                : "flex-end"
            }
          >
            {BMIrounded !== Infinity && BMIrounded >= 25 && (
              <Typography type="h5" color="primary">
                BMI: {BMIrounded}%
              </Typography>
            )}
            {imperialBMIrounded !== Infinity && imperialBMIrounded >= 25 && (
              <Typography type="h5" color="primary">
                BMI: {imperialBMIrounded}%
              </Typography>
            )}
            <Typography type="h5" color="primary">
              Overweight
            </Typography>
          </FlexWrapper>

          <FlexWrapper
            borderRadius="br14"
            bg={
              (BMIrounded !== Infinity &&
                BMIrounded > 19 &&
                BMIrounded < 24.9) ||
              (imperialBMIrounded !== Infinity &&
                imperialBMIrounded > 19 &&
                imperialBMIrounded < 24.9)
                ? "orange"
                : "transparent"
            }
            justifyContent={
              (BMIrounded !== Infinity &&
                BMIrounded > 19 &&
                BMIrounded < 24.9) ||
              (imperialBMIrounded !== Infinity &&
                imperialBMIrounded > 19 &&
                imperialBMIrounded < 24.9)
                ? "space-around"
                : "flex-end"
            }
          >
            {BMIrounded !== Infinity && BMIrounded > 19 && BMIrounded < 24.9 && (
              <Typography type="h5" color="primary">
                BMI: {BMIrounded}%
              </Typography>
            )}
            {imperialBMIrounded !== Infinity &&
              imperialBMIrounded > 19 &&
              imperialBMIrounded < 24.9 && (
                <Typography type="h5" color="primary">
                  BMI: {imperialBMIrounded}%
                </Typography>
              )}
            <Typography type="h5" color="primary">
              Normal
            </Typography>
          </FlexWrapper>
          <FlexWrapper
            borderRadius="br14"
            bg={
              (BMIrounded !== Infinity && BMIrounded <= 19) ||
              (imperialBMIrounded !== Infinity && imperialBMIrounded <= 19)
                ? "orange"
                : "transparent"
            }
            justifyContent={
              (BMIrounded !== Infinity && BMIrounded <= 19) ||
              (imperialBMIrounded !== Infinity && imperialBMIrounded <= 19)
                ? "space-around"
                : "flex-end"
            }
          >
            {BMIrounded !== Infinity && BMIrounded <= 19 && (
              <Typography fontWeight="fw700" type="h5" color="primary">
                BMI: {BMIrounded}%
              </Typography>
            )}
            {imperialBMIrounded !== Infinity && imperialBMIrounded <= 19 && (
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
    </FlexWrapper>
  );
};
