import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  FlexWrapper,
  Box,
  QuestionsCard,
  CheckOut,
} from "components";
import { FAQ_DETAILS } from "constants/Constants";

export const QuestionsCardContainer: React.FC = () => (
  <SectionWrapper>
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gap="1.875rem"
      margin="s20s50"
    >
      <Box borderRight={{ _: "none" }} pr={{ _: "s0", ltablet: "s50" }}>
        <FlexWrapper flexDirection="column" gap="0.625rem">
          {FAQ_DETAILS.map(({ question, answer, id }) => (
            <QuestionsCard answer={answer} key={id} question={question} />
          ))}
        </FlexWrapper>
      </Box>
      <CheckOut />
    </GridWrapper>
  </SectionWrapper>
);
