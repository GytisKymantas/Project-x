import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_SIX } from "constants/QuestionConstants";

const Six: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer answers={STEP_SIX} />
    </>
  );
};

export default Six;
