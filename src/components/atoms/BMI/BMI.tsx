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
  // console.log(BMIrounded, "bmi rounded");
  // console.log(heightInches, "this is imp bmi");
  // console.log(imperialBMIrounded, "BMI imperial");

  return (
    <Box
      bg="white"
      width="15.625rem"
      height="10.3125rem"
      margin="s0auto"
      boxShadow="default"
    >
      <FlexWrapper
        justifyContent={
          BMIrounded > 23 || imperialBMIrounded > 23
            ? "space-around"
            : "flex-end"
        }
      >
        {BMIrounded > 23 || imperialBMIrounded > 23 ? (
          <Typography type="h5" color="red">
            {BMIrounded === Infinity && BMIrounded > 23
              ? `${imperialBMIrounded}`
              : `${BMIrounded}`}
            %
          </Typography>
        ) : (
          ""
        )}
        <Typography type="h5" color="primary">
          Overweight
        </Typography>
      </FlexWrapper>

      <FlexWrapper
        justifyContent={
          (BMIrounded > 19 && BMIrounded <= 21.9) ||
          (imperialBMIrounded > 19 && imperialBMIrounded <= 21.9)
            ? "space-around"
            : "flex-end"
        }
      >
        {(BMIrounded > 19 && BMIrounded <= 21.9) ||
        (imperialBMIrounded > 19 && imperialBMIrounded <= 21.9) ? (
          <Typography type="h5" color="red">
            {BMIrounded === Infinity
              ? `${imperialBMIrounded}`
              : `${BMIrounded}`}
            %
          </Typography>
        ) : (
          ""
        )}
        <Typography type="h5" color="primary">
          Normal
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        justifyContent={
          BMIrounded < 19 || imperialBMIrounded < 19
            ? "space-around"
            : "flex-end"
        }
      >
        {BMIrounded < 19 || imperialBMIrounded < 19 ? (
          <Typography type="h5" color="red">
            {BMIrounded === Infinity
              ? `${imperialBMIrounded}`
              : `${BMIrounded}`}
            %
          </Typography>
        ) : (
          ""
        )}
        <Typography type="h5" color="primary">
          Underweight
        </Typography>
      </FlexWrapper>
    </Box>
  );
};
