import React from "react";
import { SectionWrapper, Box, FlexWrapper } from "components";
import HealthResult from "./HealthResult";
import { useSelector } from "react-redux";
import { selectQuizAnswers } from "state/selectors";

const HEALTH_RESULTS = [
  {
    answer: "",
    fromRight: false,
    advice:
      "Get atleast 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week",
    id: "1",
  },
  {
    answer: "",
    fromRight: true,
    isSmoker: null,
    advice:
      "Smoking accelerates the buildup of plaque in the arteries, beginning as early as adolescence. It also increases the risk of haert disesase, stroke, peripheral vasculardisease, aortic aneurysm and sudden death. Regardless of how many years you have used tobacco, quitting now can save your heart.",
    id: "2",
  },
  {
    answer: "",
    fromRight: false,
    isSmoker: null,
    advice:
      "Smoking accelerates the buildup of plaque in the arteries, beginning as early as adolescence. It also increases the risk of haert disesase, stroke, peripheral vasculardisease, aortic aneurysm and sudden death. Regardless of how many years you have used tobacco, quitting now can save your heart.",
    id: "3",
  },
  {
    answer: "",
    fromRight: true,
    isHeart: null,
    advice:
      "1 in 4 death in the United States is a result of heart disease. 1 person dies every 36 seconds from heart disease. Coronary heart disease is the most common form of heart disease. Over 800,000 Americans have a heart attack each year.",
    id: "4",
  },
];
export const HealthResultSection: React.FC = () => {
  const userQuizAnswers = useSelector(selectQuizAnswers);
  const workoutFrequencyAnswer = userQuizAnswers.quizAnswer;
  const doYouSmokeAnswer = userQuizAnswers.quizAnswer2;
  const isAsthmatic = userQuizAnswers.quizAnswer4;
  return (
    <SectionWrapper>
      <Box>
        <HealthResult />
      </Box>
    </SectionWrapper>
  );
};
