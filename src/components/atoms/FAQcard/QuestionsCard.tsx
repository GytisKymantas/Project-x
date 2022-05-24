import React, { useState } from "react";
import {
  Box,
  SectionWrapper,
  Container,
  ContentWrapper,
  Typography,
} from "components";
import { Cross, Minus } from "assets/images";

import { FlexWrapper } from "components/atoms/wrappers/FlexWrapper";

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
      bg="dirtywhite"
      onClick={() => setDisplay(!display)}
      boxShadow="1px 3px 5px black"
    >
      <ContentWrapper padding="s25">
        <FlexWrapper flexDirection="column" gap="15px">
          <FlexWrapper alignItems="center" justifyContent="space-between">
            <Typography type="h6" color="primary" fontSize="fs16">
              {question}
            </Typography>
            {display ? <Minus /> : <Cross />}
          </FlexWrapper>
          {display && <Typography color="primary">{answer}</Typography>}
        </FlexWrapper>
      </ContentWrapper>
    </Container>
  );
};