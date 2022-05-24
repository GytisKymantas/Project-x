import React, { useState, useEffect } from "react";
import { Box, QuizAnswer } from "components";
import { Check } from "assets/images";
import { setMultipleChoice } from "state/slices/multipleChoiceSlice";
import { useDispatch, useSelector } from "react-redux";

import { pageNext } from "state/slices/pageSlice";
import { selectMultipleChoice } from "state/selectors";

interface IsMultipleTestProps {
  answers: any;
  page: any;
}

export const IsMultipleTest: React.FC<IsMultipleTestProps> = ({
  answers,
  page,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const multipleAnswers = useSelector(selectMultipleChoice);
  console.log(multipleAnswers, "multiple answers from redux");
  console.log(selectedAnswer, "local state");
  const dispatch = useDispatch();

  const handleSelectAnswer = (answer: Array<string>) => {
    console.log(answer);
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== answer));
    } else {
      setSelectedAnswer((array) => array.concat(answer));
    }
  };

  if (selectedAnswer.includes("None")) {
    setSelectedAnswer([]);
  }

  const handleNextStep = () => {
    dispatch(setMultipleChoice(selectedAnswer));
    dispatch(pageNext());
  };

  return (
    <Box>
      {answers[page]?.question?.answers.map((answer, i) => (
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
