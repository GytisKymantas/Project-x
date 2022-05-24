import React from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";

interface IsMultipleProps {
  selectedUserState: Object[];
  setSelectedUserState: Dispatch<SetStateAction<{}>>;
  quizAnswer: string;
  title: string;
}

export const IsMultiple: React.FC<IsMultipleProps> = ({
  selectedUserState,
  setSelectedUserState,
  quizAnswer,
  title,
}) => {
  return (
    <Box position="relative">
      <QuizAnswer
        border={
          selectedUserState.includes(quizAnswer)
            ? "solid 2px black"
            : "solid 2px transparent"
        }
        onClick={
          selectedUserState.includes(quizAnswer)
            ? () =>
                setSelectedUserState((array) =>
                  array.filter((e) => !e.includes(quizAnswer))
                )
            : () => setSelectedUserState((array) => array.concat(quizAnswer))
        }
      >
        {title}
      </QuizAnswer>
      {selectedUserState.includes(quizAnswer) && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )}
    </Box>
  );
};
