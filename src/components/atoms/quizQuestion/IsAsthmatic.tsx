import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsAsthmaticProps {
  handleClick: () => void;
  quizAnswer: string;
  setAsthmaticAnswer: Dispatch<SetStateAction<{}>>;
  title: string;
  isAsthmatic: boolean;
}

export const IsAsthmatic: React.FC<IsAsthmaticProps> = ({
  setAsthmaticAnswer,
  quizAnswer,
  title,
  handleClick,
  isAsthmatic,
}) => {
  return (
    <Box
      onClick={() =>
        setAsthmaticAnswer({
          quizAnswer,
        })
      }
    >
      <QuizAnswer onClick={handleClick}>{title}</QuizAnswer>
    </Box>
  );
};
