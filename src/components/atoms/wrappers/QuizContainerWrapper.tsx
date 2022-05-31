import React from "react";
import {
  ProgressBar,
  SectionWrapper,
  ContentWrapper,
  QuizHeader,
  FlexWrapper,
} from "components";
import { IQuizData } from "state/types";
import { WIDTH_SCALE } from "constants/Constants";

interface QuizContainerWrapperProps {
  answers: IQuizData[];
  children: React.ReactNode;
  page: number;
}

export const QuizContainerWrapper: React.FC<QuizContainerWrapperProps> = ({
  answers,
  children,
  page,
}) => {
  return (
    <>
      <ProgressBar width={WIDTH_SCALE[page]} />
      <SectionWrapper>
        <ContentWrapper maxWidth="100%">
          <QuizHeader page={page} answers={answers} />
          <FlexWrapper
            alignItems="center"
            flexDirection={page === 2 || page === 5 ? "row" : "column"}
            flexWrap="wrap"
            justifyContent="center"
            mt="s50"
          >
            {children}
          </FlexWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};
