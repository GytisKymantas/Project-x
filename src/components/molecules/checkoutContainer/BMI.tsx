import React from "react";
import { Box, FlexWrapper, Typography } from "components";

interface BMIProps {
  answer: number;
}

export const BMI: React.FC<BMIProps> = ({ answer }) => {
  return (
    <Box
      bg="white"
      width="250px"
      height="165px"
      boxShadow={"1px 5px 16px black"}
    >
      <FlexWrapper
        bg=""
        justifyContent={answer > 22 ? "space-around" : "flex-end"}
      >
        {answer > 22 ? (
          <Typography type="h5" color="red">
            {answer}%
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
          (answer > 19 && answer < 22) || answer == 22
            ? "space-around"
            : "flex-end"
        }
      >
        {(answer > 19 && answer < 22) || answer == 22 ? (
          <Typography type="h5" color="red">
            {answer}%
          </Typography>
        ) : (
          ""
        )}
        <Typography type="h5" color="primary">
          Normal
        </Typography>
      </FlexWrapper>
      <FlexWrapper justifyContent={answer < 19 ? "space-around" : "flex-end"}>
        {answer < 19 ? (
          <Typography type="h5" color="red">
            {answer}%
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
