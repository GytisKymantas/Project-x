import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_TWO } from "constants/QuestionConstants";

const Two: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer answers={STEP_TWO} />
    </>
  );
};

export default Two;
