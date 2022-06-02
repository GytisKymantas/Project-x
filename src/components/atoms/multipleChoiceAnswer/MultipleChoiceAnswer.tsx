import React, { useState } from "react";
import { Box, QuizAnswer, FlexWrapper } from "components";
import { Check } from "assets/images";
import {
  setMultipleChoice,
  setMultipleChoiceGoals,
} from "state/slices/multipleChoiceSlice";
import { useDispatch } from "react-redux";
import { theme } from "styles/theme";
import { IQuizData } from "state/types";
import { pageNext } from "state/slices/pageSlice";

interface MultipleChoiceAnswerProps {
  quizAnswers: IQuizData[];
  page: number;
}

export const MultipleChoiceAnswer: React.FC<MultipleChoiceAnswerProps> = ({
  quizAnswers,
  page,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<any>([]);
  const answers = quizAnswers[page]?.question?.answers;

  const dispatch = useDispatch();

  if (selectedAnswer.includes("None")) {
    setSelectedAnswer(["none"]);
  }

  const handleAnswer = (answer: string[]) => {
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

  const handleNextPage = () => {
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
    <FlexWrapper
      flexWrap="wrap"
      justifyContent="center"
      maxWidth={{ _: "23rem", ltablet: "66.25rem" }}
    >
      {answers?.map((answer, i) => (
        <Box position="relative" key={i}>
          {selectedAnswer.includes("none") ? (
            <Box>
              <QuizAnswer
                key={i}
                onClick={() => handleAnswer(answer as unknown as string[])}
                border={
                  selectedAnswer.includes("none") && i === 9
                    ? `${theme.borders.answer}`
                    : `${theme.borders.transparent}`
                }
              >
                {answer as unknown as React.ReactNode}
              </QuizAnswer>
              {selectedAnswer.includes("none") && i === 9 && (
                <Box position="absolute" top="35%" left="5%">
                  <Check />
                </Box>
              )}
            </Box>
          ) : (
            <QuizAnswer
              key={i}
              onClick={() => handleAnswer(answer as unknown as string[])}
              border={
                selectedAnswer.includes(answer)
                  ? `${theme.borders.answer}`
                  : `${theme.borders.transparent}`
              }
            >
              {answer as unknown as React.ReactNode}
            </QuizAnswer>
          )}
          {selectedAnswer.includes(answer) && (
            <Box position="absolute" top="35%" left="5%">
              <Check />
            </Box>
          )}
        </Box>
      ))}
      {selectedAnswer.length < 1 && (
        <Box mt={{ _: "s20", ltablet: "s0" }}>
          <QuizAnswer onClick={handleNextPage} disabled isSubmit>
            Submit
          </QuizAnswer>
        </Box>
      )}
      {selectedAnswer.length >= 1 && (
        <Box mt={{ _: "s20", ltablet: "s0" }}>
          <QuizAnswer isSubmit onClick={handleNextPage}>
            Submit
          </QuizAnswer>{" "}
        </Box>
      )}
    </FlexWrapper>
  );
};
