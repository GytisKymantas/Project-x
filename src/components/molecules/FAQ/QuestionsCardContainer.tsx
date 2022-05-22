import React from "react";
import { SectionWrapper, GridWrapper } from "components";
import { FAQ_DETAILS } from "constants/Constants";
import { QuestionsCard } from "../../atoms/FAQcard/QuestionsCard";
import { Breakpoints } from "styles/theme";

export const QuestionsCardContainer = () => (
  <SectionWrapper>
    <GridWrapper
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      gap="30px"
      margin="s20s50"
    >
      {FAQ_DETAILS.map(({ question, answer, id }) => (
        <QuestionsCard question={question} answer={answer} key={id} />
      ))}
    </GridWrapper>
  </SectionWrapper>
);
