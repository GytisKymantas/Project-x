import React, { useState } from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";
import {
  setMultipleChoice,
  setMultipleChoiceGoals,
} from "state/slices/multipleChoiceSlice";
import { useDispatch, useSelector } from "react-redux";

import { pageNext } from "state/slices/pageSlice";
import { selectMultipleChoice } from "state/selectors";

interface MultipleChoiceAnswerProps {
  answers: any;
  page: any;
}

export const MultipleChoiceAnswer: React.FC<MultipleChoiceAnswerProps> = ({
  answers,
  page,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const multipleAnswers = useSelector(selectMultipleChoice);
  const dispatch = useDispatch();

  const handleSelectAnswer = (answer: string[]) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(
        selectedAnswer.filter((item: string[]) => item !== answer)
      );
    } else {
      setSelectedAnswer((array: string[]) => array.concat(answer));
    }
  };

  if (selectedAnswer.includes("None")) {
    setSelectedAnswer([]);
  }

  const handleNextStep = () => {
    switch (page) {
      case 2:
        return (
          dispatch(setMultipleChoice(selectedAnswer)), dispatch(pageNext())
        );
      case 5:
        return (
          dispatch(setMultipleChoiceGoals(selectedAnswer)), dispatch(pageNext())
        );
      default:
        return;
    }
  };

  return (
    <Box>
      {answers[page].question.answers.map((answer: string[], i: number) => (
        <Box position="relative" key={i}>
          <QuizAnswer
            key={i}
            onClick={() => handleSelectAnswer(answer)}
            border={
              selectedAnswer.includes(answer)
                ? "solid 2px black"
                : "solid 2px transparent"
            }
          >
            {answer}
          </QuizAnswer>

          {selectedAnswer.includes(answer) && (
            <Box position={"absolute"} top="28%" left="5%">
              <Check />
            </Box>
          )}
        </Box>
      ))}
      {selectedAnswer.length < 1 && (
        <QuizAnswer onClick={handleNextStep} disabled isSubmit>
          submit
        </QuizAnswer>
      )}
      {selectedAnswer.length >= 1 && (
        <QuizAnswer onClick={handleNextStep}>Submit</QuizAnswer>
      )}
    </Box>
  );
};
