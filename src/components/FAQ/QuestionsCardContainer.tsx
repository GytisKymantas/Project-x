import React from "react";
import { SectionWrapper, GridWrapper } from "components";
import { FAQ_DETAILS } from "constants/Constants";
import { QuestionsCard } from "./QuestionsCard";

export const QuestionsCardContainer = () => (
  <SectionWrapper backgroundColor="taxi">
    <GridWrapper
      gridTemplateColumns="repeat(2,1fr)"
      gap="30px"
      margin="20px 50px"
    >
      {FAQ_DETAILS.map(({ question, answer, id }) => (
        <QuestionsCard question={question} answer={answer} key={id} />
      ))}
    </GridWrapper>
  </SectionWrapper>
);
