import React from "react";
import { FlexWrapper, Box, Typography, HomeLink } from "components";
import { ANSWERS } from "constants/QuestionMassive";

interface QuizHeaderProps {
  arrayIndex: number;
  width?: string;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  arrayIndex,
  width,
}) => {
  return (
    <>
      <FlexWrapper alignItems="center" justifyContent="space-around">
        <HomeLink />
        <Typography color="primary" textAlign="center">
          {arrayIndex + 1} of 7
        </Typography>
      </FlexWrapper>
      <Box mt={arrayIndex === 2 || arrayIndex === 5 ? "s20" : "s100"}>
        <Typography color="primary" type="h4" textAlign="center">
          {ANSWERS[arrayIndex].question.title}{" "}
        </Typography>
      </Box>
    </>
  );
};
