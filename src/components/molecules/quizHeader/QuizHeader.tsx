import React from "react";
import { FlexWrapper, Box, Typography, HomeLink } from "components";
import { IQuizData } from "state/types";

interface QuizHeaderProps {
  answers: IQuizData[];
  page: number;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ answers, page }) => (
  <>
    <FlexWrapper alignItems="center" justifyContent="space-around">
      <HomeLink />
      <Typography color="primary" textAlign="center">
        {page + 1} of 7
      </Typography>
    </FlexWrapper>
    <Box mt={page === 2 || page === 5 || page === 6 ? "s20" : "s100"}>
      <Typography color="primary" textAlign="center" type="h4">
        {answers[page]?.question?.title}{" "}
      </Typography>
    </Box>
  </>
);
