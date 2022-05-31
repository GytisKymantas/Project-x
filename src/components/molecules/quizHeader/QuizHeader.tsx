import React from "react";
import { FlexWrapper, Box, Typography, HomeLink } from "components";

interface QuizHeaderProps {
  page: number;
  answers?: string[];
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({ page, answers }) => (
  <>
    <FlexWrapper alignItems="center" justifyContent="space-around">
      <HomeLink />
      <Typography color="primary" textAlign="center">
        {page + 1} of 7
      </Typography>
    </FlexWrapper>
    <Box mt={page === 2 || page === 5 || page === 6 ? "s20" : "s100"}>
      <Typography color="primary" type="h4" textAlign="center">
        {answers[page]?.question?.title}{" "}
      </Typography>
    </Box>
  </>
);
