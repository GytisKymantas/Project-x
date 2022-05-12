import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_FIVE } from "constants/QuestionConstants";

const Five: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer
        question="Are You asthmatic?"
        answers={STEP_FIVE}
      />
    </>
  );
};

export default Five;
