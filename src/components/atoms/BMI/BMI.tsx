import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";

export const BMI: React.FC = () => {
  const userData = useSelector(selectUserData);
  const BMI =
    ((userData.weight * 1000) / (userData.height * userData.height)) * 10;
  const BMIrounded = Math.round(BMI);
  const heightInches = userData.feet * 12 + parseInt(userData.inches);
  const imperialBMI = (userData.weight * 703) / (heightInches * heightInches);
  const imperialBMIrounded = Math.round(imperialBMI);

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
            {BMIrounded === Infinity
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
