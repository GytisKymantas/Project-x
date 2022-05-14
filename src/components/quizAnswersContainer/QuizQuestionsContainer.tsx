import React from "react";
import { QuizAnswer } from "../buttons/QuizAnswer";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  SectionWrapper,
} from "components";

interface QuizQuestionsContainerProps {
  question: string;
  answers?: any;
  id?: string;
  title?: string;
}

export const QuizQuestionsContainer: React.FC<QuizQuestionsContainerProps> = ({
  question,
  answers,
}) => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          {question}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {answers.map(({ title, id }: string) => (
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
