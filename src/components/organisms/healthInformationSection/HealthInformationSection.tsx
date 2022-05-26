import React from "react";
import { HealthInformation, SectionWrapper } from "components";
import { useSelector } from "react-redux";
import { selectQuizAnswers } from "state/selectors";
// import {
//   workoutFrequencyAnswer,
//   isSmoking,
//   isHeartCondition,
//   isAsthmatic,
// } from "utils/metrics";
export const HealthInformationSection: React.FC = () => {
  const userQuizAnswers = useSelector(selectQuizAnswers);
  const workoutFrequencyAnswer = userQuizAnswers?.isWorkingOut;
  const isSmoking = userQuizAnswers?.isSmoking;
  const isHeartCondition = userQuizAnswers?.isHeartCondition;
  const isAsthmatic = userQuizAnswers?.isAsthmatic;
  //TODO:
  console.log(workoutFrequencyAnswer);
  console.log(isSmoking, "is smoking");
  console.log(isHeartCondition, "is haert smoking");
  console.log(isAsthmatic, "is haert arsthama");

  const HEALTH_INFORMATION_DATA = [
    {
      id: "1",
      title: workoutFrequencyAnswer,
      treatment:
        "Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week",
      answer: true,
    },
    {
      id: "2",
      title: "So, you're a smoker!",
      treatment:
        "Smoking accelerates the buildup of plaque in the arteries, beginning as early as adolescence. It also increases therisk of heart disease, stroke, peripheral vascular disease, aortic aneurysm and sudden death. Regardless of how many years you have used tobacco, quitting now can save your heart.",
      answer: isSmoking,
    },
    {
      id: "3",
      title: "Your heart is valuable",
      treatment:
        " 1 in 4 deaths in the United States is a result of heart disease. 1 person dies every 36 seconds from heart disease. Coronary heart disease is the most common form of heart disease. Over 800,000 Americans have a heart attack each year.",
      answer: isHeartCondition,
    },
    {
      id: "4",
      title: "You're asthmatic!",
      treatment:
        "Stay in areas with minimal air pollution. Avoid sports with continuous activity. Basketball, soccer, and long-distance running can be hard on the lungs if your asthma is poorly controlled. Avoid sports that are done in the cold, likecross-country skiing and hockey.",
      answer: isAsthmatic,
    },
  ];

  return (
    <SectionWrapper>
      {HEALTH_INFORMATION_DATA.map(({ id, title, treatment, answer }) => (
        <HealthInformation
          key={id}
          title={title}
          treatment={treatment}
          answer={answer}
        />
      ))}
    </SectionWrapper>
  );
};
