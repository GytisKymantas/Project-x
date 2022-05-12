import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_FOUR } from "constants/QuestionConstants";

const Four: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer
        question="Do you or does your family have history with heart issues?"
        answers={STEP_FOUR}
      />
    </>
  );
};

export default Four;
