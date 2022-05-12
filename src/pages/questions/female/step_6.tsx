import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_SIX } from "constants/QuestionConstants";

const Six: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer
        question="Which of the following conditions apply to you?"
        answers={STEP_SIX}
      />
    </>
  );
};

export default Six;
