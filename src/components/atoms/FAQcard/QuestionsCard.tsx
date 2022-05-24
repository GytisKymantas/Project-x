import React, { useState } from "react";
import { Container, ContentWrapper, Typography, FlexWrapper } from "components";
import { Cross, Minus } from "assets/images";

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
      boxShadow="default"
    >
      <ContentWrapper padding="s25">
        <FlexWrapper flexDirection="column" gap="0.9375rem">
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
