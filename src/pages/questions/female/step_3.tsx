import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_THREE } from "constants/QuestionConstants";

const Three: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer
        question="Have you consumed any type of tobacco products in the past 14 days?"
        answers={STEP_THREE}
      />
    </>
  );
};

export default Three;
