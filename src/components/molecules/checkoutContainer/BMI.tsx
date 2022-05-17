import React from "react";
import { Box, FlexWrapper, Typography } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";

export const BMI: React.FC = () => {
  const userData = useSelector(selectUserData);
  const BMI =
    ((userData.weight * 1000) / (userData.height * userData.height)) * 10;
  const BMIrounded = Math.round(BMI);

  return (
    <Box
      bg="white"
      width="250px"
      height="165px"
      boxShadow={"1px 5px 16px black"}
    >
      <FlexWrapper
        bg=""
        justifyContent={BMIrounded > 22 ? "space-around" : "flex-end"}
      >
        {BMIrounded > 22 ? (
          <Typography type="h5" color="red">
            {BMIrounded}%
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
          (BMIrounded > 19 && BMIrounded < 22) || BMIrounded == 22
            ? "space-around"
            : "flex-end"
        }
      >
        {(BMIrounded > 19 && BMIrounded < 22) || BMIrounded == 22 ? (
          <Typography type="h5" color="red">
            {BMIrounded}%
          </Typography>
        ) : (
          ""
        )}
        <Typography type="h5" color="primary">
          Normal
        </Typography>
      </FlexWrapper>
      <FlexWrapper
        justifyContent={BMIrounded < 19 ? "space-around" : "flex-end"}
      >
        {BMIrounded < 19 ? (
          <Typography type="h5" color="red">
            {BMIrounded}%
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
