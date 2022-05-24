import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsWorkingOutProps {
  handleClick: () => void;
  workAnswer: Object[];
  setWorkAnswer: any;
  quizAnswer: string;
  title: string;
  isWorkingOut: boolean;
}

export const IsWorkingOut: React.FC<IsWorkingOutProps> = ({
  workAnswer,
  setWorkAnswer,
  quizAnswer,
  title,
  isWorkingOut,
  handleClick,
}) => {
  return (
    <Box
      position="relative"
      onClick={() =>
        setWorkAnswer({
          quizAnswer,
        })
      }
    >
      <QuizAnswer onClick={handleClick}>{title}</QuizAnswer>
      {isWorkingOut === quizAnswer && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )}
    </Box>
  );
};
