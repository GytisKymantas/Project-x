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
}

export const QuizContainerWrapper: React.FC<QuizContainerWrapperProps> = ({
  page,
  children,
}) => {
  return (
    <>
      <ProgressBar width={WIDTH_SCALE[page]} />
      <SectionWrapper p="1rem 3rem 3rem 3rem">
        <ContentWrapper maxWidth="100%">
          <QuizHeader arrayIndex={page} />
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
