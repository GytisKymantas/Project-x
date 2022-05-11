import React, { useState } from "react";
import {
  Box,
  SectionWrapper,
  Container,
  ContentWrapper,
  Typography,
} from "components";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

interface QuestionsCardProps {
  question: string;
  answer: string;
}

export const QuestionsCard: React.FC<QuestionsCardProps> = ({
  question,
  answer,
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <Container
      width="100%"
      bg="white"
      height="181px"
      onClick={() => setDisplay(!display)}
    >
      <ContentWrapper padding="s25">
        <FlexWrapper flexDirection="column" gap="35px">
          <Typography type="h6" color="primary">
            {question}
          </Typography>
          {display && <Typography color="primary">{answer}</Typography>}
        </FlexWrapper>
      </ContentWrapper>
    </Container>
  );
};
