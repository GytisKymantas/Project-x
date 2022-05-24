import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  FlexWrapper,
  SectionHeader,
  Box,
  QuestionsCard,
  GenderButtons,
} from "components";
import { FAQ_DETAILS } from "constants/Constants";

export const QuestionsCardContainer = () => (
  <SectionWrapper>
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gap="1.875rem"
      margin="s20s50"
    >
      <Box
        pr={{ _: "0", ltablet: "s50" }}
        borderRight={{ _: "none" }}
        borderBottom={{ ltablet: "scale" }}
      >
        <FlexWrapper flexDirection="column" gap="0.625rem">
          {FAQ_DETAILS.map(({ question, answer, id }) => (
            <QuestionsCard question={question} answer={answer} key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <FlexWrapper
        flexDirection="column"
        justifyContent="center"
        maxHeight="23rem"
      >
        <SectionHeader
          center
          type="h3"
          header="Check It Out"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
        />
        <FlexWrapper justifyContent="center">
          <GenderButtons />
        </FlexWrapper>
      </FlexWrapper>
    </GridWrapper>
  </SectionWrapper>
);
