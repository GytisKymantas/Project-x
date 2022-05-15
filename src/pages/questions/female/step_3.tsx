import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_THREE } from "constants/QuestionConstants";

const Three: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer answers={STEP_THREE} />
    </>
  );
};

export default Three;
