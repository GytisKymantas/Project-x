import React from "react";
import { QuizQuestionsContainer } from "components";
import { STEP_ONE } from "constants/QuestionConstants";

const One: React.FC = () => {
  return (
    <>
      <QuizQuestionsContainer answers={STEP_ONE} />
    </>
  );
};

export default One;
