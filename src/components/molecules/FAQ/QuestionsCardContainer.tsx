import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  FlexWrapper,
  SectionHeader,
  Box,
} from "components";
import { FAQ_DETAILS } from "constants/Constants";
import { QuestionsCard } from "../../atoms/FAQcard/QuestionsCard";
import { theme } from "styles/theme";
import { Breakpoints } from "styles/theme";
import { GenderButtons } from "components/atoms/genderButtons/GenderButtons";

export const QuestionsCardContainer = () => (
  <SectionWrapper>
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gap="30px"
      margin="s20s50"
    >
      <Box pr="3rem" borderRight="1px solid black">
        <FlexWrapper flexDirection="column">
          {FAQ_DETAILS.map(({ question, answer, id }) => (
            <QuestionsCard question={question} answer={answer} key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <FlexWrapper
        flexDirection="column"
        justifyContent="center"
        maxHeight="368px"
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
