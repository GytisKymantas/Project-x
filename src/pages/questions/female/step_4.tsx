import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_FOUR } from "constants/QuestionConstants";

const Four: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer answers={STEP_FOUR} />
    </>
  );
};

export default Four;
