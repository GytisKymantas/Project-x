import React, { useState } from "react";
import { ContentWrapper, Typography, FlexWrapper, Box } from "components";
import { Cross, Minus } from "assets/images";
import styled from "styled-components/macro";

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
    <ImageHolder
      width="100%"
      bg="dirtywhite"
      onClick={() => setDisplay(!display)}
      boxShadow="default"
      borderRadius="br20"
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
    </ImageHolder>
  );
};

const ImageHolder = styled(Box)`
  cursor: pointer;
`;
