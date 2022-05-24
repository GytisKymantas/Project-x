import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsSmokingProps {
  handleClick: () => void;
  quizAnswer: string;
  setSmokingAnswer: Dispatch<SetStateAction<{}>>;
  title: string;
}

export const IsSmoking: React.FC<IsSmokingProps> = ({
  setSmokingAnswer,
  quizAnswer,
  title,
  handleClick,
}) => {
  return (
    <Box
      onClick={() =>
        setSmokingAnswer({
          quizAnswer,
        })
      }
    >
      <QuizAnswer onClick={handleClick}>{title}</QuizAnswer>
    </Box>
  );
};
