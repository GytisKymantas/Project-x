import React from "react";
import { QuizAnswer } from "../buttons/QuizAnswer";
import { QUIZ_DETAILS } from "constants/Constants";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  SectionWrapper,
} from "components";

export const QuizQuestionsContainer: React.FC = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          How often do you do physical exercises?
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {QUIZ_DETAILS.map(({ title, id }) => (
            <QuizAnswer key={id}>{title}</QuizAnswer>
          ))}
          <QuizAnswer isSubmit>submit</QuizAnswer>
        </FlexWrapper>
        {/* <Box position={"absolute"} top="0" left="0" zIndex={-1}>
          <Image src="quizBackGround" />
        </Box> */}
      </ContentWrapper>
    </SectionWrapper>
  );
};
