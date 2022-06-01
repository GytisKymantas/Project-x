import React from "react";
import {
  Box,
  CheckOut,
  FlexWrapper,
  GridWrapper,
  SectionWrapper,
  QuestionsCard,
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
          {FAQ_DETAILS.map(({ answer, id, question }) => (
            <QuestionsCard answer={answer} key={id} question={question} />
          ))}
        </FlexWrapper>
      </Box>
      <CheckOut />
    </GridWrapper>
  </SectionWrapper>
);
