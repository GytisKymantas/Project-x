import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsHeartProps {
  handleClick: () => void;
  quizAnswer: string;
  setHeartAnswer: Dispatch<SetStateAction<{}>>;
  title: string;
}

export const IsHeart: React.FC<IsHeartProps> = ({
  setHeartAnswer,
  quizAnswer,
  title,
  handleClick,
}) => {
  return (
    <Box
      onClick={() =>
        setHeartAnswer({
          quizAnswer,
        })
      }
    >
      <QuizAnswer onClick={handleClick}>{title}</QuizAnswer>
    </Box>
  );
};
