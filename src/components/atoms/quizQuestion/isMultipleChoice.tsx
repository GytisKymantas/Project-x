import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsMultipleChoiceProps {
  multipleGoals: Object[];
  setMultipleGoals: Dispatch<SetStateAction<{}>>;
  quizAnswer: string;
  title: string;
}

export const IsMultipleChoice: React.FC<IsMultipleChoiceProps> = ({
  multipleGoals,
  setMultipleGoals,
  quizAnswer,
  title,
}) => {
  return (
    <Box position="relative">
      <QuizAnswer
        border={
          multipleGoals.includes(quizAnswer)
            ? "solid 2px black"
            : "solid 2px transparent"
        }
        onClick={
          multipleGoals.includes(quizAnswer)
            ? () =>
                setMultipleGoals((array) =>
                  array.filter((e) => !e.includes(quizAnswer))
                )
            : () => setMultipleGoals((array) => array.concat(quizAnswer))
        }
      >
        {title}
      </QuizAnswer>
      {multipleGoals.includes(quizAnswer) && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )}
    </Box>
  );
};
