import React from "react";
import { QuizQuestionsContainer } from "components";
import { Navigation } from "components/navigation/Navigation";
import { Measurements } from "components/measurementsContainer/Measurements";

const Landing = () => {
  return (
    <>
      <Navigation />
      <Measurements />;
    </>
  );
};

export default Landing;
