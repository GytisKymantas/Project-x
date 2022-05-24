import React from "react";
import { FlexWrapper, Box, Typography, HomeLink } from "components";
import { ANSWERS } from "constants/QuestionMassive";

interface QuizHeaderProps {
  page: number;
  answers: any;
  width?: string;
}

export const QuizHeaderTest: React.FC<QuizHeaderProps> = ({
  page,
  width,
  answers,
}) => {
  return (
    <>
      <FlexWrapper alignItems="center" justifyContent="space-around">
        <HomeLink />
        <Typography color="primary" textAlign="center">
          {page + 1} of 7
        </Typography>
      </FlexWrapper>
      <Box mt={page === 2 || page === 5 ? "s20" : "s100"}>
        <Typography color="primary" type="h4" textAlign="center">
          {answers[page]?.question.title}{" "}
        </Typography>
      </Box>
    </>
  );
};
