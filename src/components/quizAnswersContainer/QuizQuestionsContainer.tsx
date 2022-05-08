import React from "react";
import { QuizButton } from "../buttons/QuizButton";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { QUIZ_ANSWERS } from "constants/Constants";
import { ContentWrapper } from "components/wrappers/ContentWrapper";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Typography } from "components/typography/Typography";

export const QuizQuestionsContainer: React.FC = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          How often do you do physical exercises?
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="50px">
          {QUIZ_ANSWERS.map(({ title, id }) => (
            <QuizButton key={id}>{title}</QuizButton>
          ))}
          <QuizButton isSubmit>submit</QuizButton>
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
