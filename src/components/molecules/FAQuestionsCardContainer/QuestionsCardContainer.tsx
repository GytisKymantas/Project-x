import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  FlexWrapper,
  SectionHeader,
  Box,
  QuestionsCard,
  GenderButtons,
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
      <Box pr={{ _: "0", ltablet: "s50" }} borderRight={{ _: "none" }}>
        <FlexWrapper flexDirection="column" gap="0.625rem">
          {FAQ_DETAILS.map(({ question, answer, id }) => (
            <QuestionsCard question={question} answer={answer} key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <CheckOut />
    </GridWrapper>
  </SectionWrapper>
);
