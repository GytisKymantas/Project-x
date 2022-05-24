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
      width="250px"
      height="165px"
      boxShadow={"1px 5px 16px black"}
    >
      <FlexWrapper
        justifyContent={
          BMIrounded > 22 || imperialBMIrounded > 22
            ? "space-around"
            : "flex-end"
        }
      >
        {BMIrounded > 22 || imperialBMIrounded > 22 ? (
          <Typography type="h5" color="red">
            {BMIrounded === Infinity && BMIrounded > 22
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
          (BMIrounded > 19 && BMIrounded <= 22) ||
          (imperialBMIrounded > 19 && imperialBMIrounded <= 22)
            ? "space-around"
            : "flex-end"
        }
      >
        {(BMIrounded > 19 && BMIrounded <= 22) ||
        (imperialBMIrounded > 19 && imperialBMIrounded <= 22) ? (
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
