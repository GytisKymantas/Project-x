import React from "react";
import {
  ProgressBar,
  SectionWrapper,
  ContentWrapper,
  QuizHeader,
  FlexWrapper,
} from "components";
import { WIDTH_SCALE } from "constants/Constants";

interface QuizContainerWrapperProps {
  page: number;
  children: React.ReactNode;
  answers?: string[];
}

export const QuizContainerWrapper: React.FC<QuizContainerWrapperProps> = ({
  page,
  children,
  answers,
}) => {
  return (
    <>
      <ProgressBar width={WIDTH_SCALE[page]} />
      <SectionWrapper>
        <ContentWrapper maxWidth="100%">
          <QuizHeader page={page} answers={answers} />
          <FlexWrapper
            flexDirection={page === 2 || page === 5 ? "row" : "column"}
            flexWrap="wrap"
            alignItems="center"
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
