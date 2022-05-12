import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_TWO } from "constants/QuestionConstants";

const One: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer
        question="What are your Fitness goals"
        answers={STEP_TWO}
      />
    </>
  );
};

export default One;
