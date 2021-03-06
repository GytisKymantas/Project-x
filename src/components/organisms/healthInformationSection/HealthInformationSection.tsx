import React from "react";
import { HealthInformation, SectionWrapper, Typography } from "components";
import { useSelector } from "react-redux";
import { selectQuizAnswers } from "state/selectors";
import { theme } from "styles/theme";
import styled from "styled-components/macro";

export const HealthInformationSection: React.FC = () => {
  const userQuizAnswers = useSelector(selectQuizAnswers);
  const workoutFrequencyAnswer = userQuizAnswers?.isWorkingOut;
  const isSmoking = userQuizAnswers?.isSmoking;
  const isHeartCondition = userQuizAnswers?.isHeartCondition;
  const isAsthmatic = userQuizAnswers?.isAsthmatic;

  const HEALTH_INFORMATION_DATA = [
    {
      answer: true,
      id: "1",
      title: workoutFrequencyAnswer as string,
      treatment:
        "Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week",
    },
    {
      answer: isSmoking,
      id: "2",
      title: "So, you're a smoker!",
      treatment:
        "Smoking accelerates the buildup of plaque in the arteries, beginning as early as adolescence. It also increases therisk of heart disease, stroke, peripheral vascular disease, aortic aneurysm and sudden death. Regardless of how many years you have used tobacco, quitting now can save your heart.",
    },
    {
      answer: isHeartCondition,
      id: "3",
      title: "Your heart is valuable",
      treatment:
        " 1 in 4 deaths in the United States is a result of heart disease. 1 person dies every 36 seconds from heart disease. Coronary heart disease is the most common form of heart disease. Over 800,000 Americans have a heart attack each year.",
    },
    {
      answer: isAsthmatic,
      id: "4",
      title: "You're asthmatic!",
      treatment:
        "Stay in areas with minimal air pollution. Avoid sports with continuous activity. Basketball, soccer, and long-distance running can be hard on the lungs if your asthma is poorly controlled. Avoid sports that are done in the cold, likecross-country skiing and hockey.",
    },
  ];

  return (
    <SectionWrapper>
      <HeaderTitle color="primary" textAlign="center" type="h4">
        Health Facts You should know!
      </HeaderTitle>
      {HEALTH_INFORMATION_DATA.map(({ answer, id, title, treatment }) => (
        <HealthInformation
          answer={answer}
          key={id}
          title={title}
          treatment={treatment}
        />
      ))}
    </SectionWrapper>
  );
};

export const HeaderTitle = styled(Typography)`
  :after {
    background: ${theme.colors.orange};
    border-radius: 0.1875rem;
    content: "";
    display: block;
    height: 0.125rem;
    margin: 1.875rem auto;
    width: 5rem;
  }
`;
