import React, { useState, useEffect } from "react";
import { Box, QuizAnswer, FlexWrapper } from "components";
import { Check } from "assets/images";
import {
  setMultipleChoice,
  setMultipleChoiceGoals,
} from "state/slices/multipleChoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "styles/theme";
import { pageNext } from "state/slices/pageSlice";
import { selectMultipleChoice } from "state/selectors";

interface MultipleChoiceAnswerProps {
  answers: Array<string>;
  page: number;
}

export const MultipleChoiceAnswer: React.FC<MultipleChoiceAnswerProps> = ({
  answers,
  page,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const multipleAnswers = useSelector(selectMultipleChoice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedAnswer.includes("None")) {
      setSelectedAnswer(["none"]);
    }
  }, [selectedAnswer]);

  const handleSelectAnswer = (answer: string[]) => {
    if (selectedAnswer.includes(answer)) {
      setSelectedAnswer(
        selectedAnswer.filter((item: string[]) => item !== answer)
      );
    } else {
      setSelectedAnswer(
        selectedAnswer.filter((item: string) => item !== "none")
      ),
        setSelectedAnswer((array: string[]) => array.concat(answer));
    }
  };

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

  console.log(selectedAnswer, "SELECTED ANSEWER");

  return (
    <FlexWrapper flexWrap="wrap" justifyContent="center">
      {answers[page].question.answers.map((answer: string[], i: number) => (
        <Box position="relative" key={i}>
          <QuizAnswer
            key={i}
            onClick={() => handleSelectAnswer(answer)}
            border={
              selectedAnswer.includes(answer)
                ? `${theme.borders.answer}`
                : `${theme.borders.transparent}`
            }
          >
            {answer}
          </QuizAnswer>

          {selectedAnswer.includes(answer) && (
            <Box position="absolute" top="35%" left="5%">
              <Check />
            </Box>
          )}
        </Box>
      ))}
      {selectedAnswer.length < 1 && (
        <Box mt="s20">
          <QuizAnswer onClick={handleNextStep} disabled isSubmit>
            Submit
          </QuizAnswer>
        </Box>
      )}

      {selectedAnswer.length >= 1 && (
        <Box mt="s20">
          <QuizAnswer onClick={handleNextStep}>Submit</QuizAnswer>{" "}
        </Box>
      )}
    </FlexWrapper>
  );
};
