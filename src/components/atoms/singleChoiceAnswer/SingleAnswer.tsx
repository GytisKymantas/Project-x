import React from "react";
import { Box, QuizAnswer } from "components";
import { useDispatch } from "react-redux";
import { pageNext } from "state/slices/pageSlice";
import { IQuizData } from "state/types";

import {
  setIsAsthmatic,
  setIsWorkingOut,
  setIsSmoking,
  setIsHeart,
} from "state/slices/quizAnswersSlice";

interface SingleAnswerTestProps {
  quizAnswers: IQuizData[];
  page: number;
}
export const SingleChoiceAnswer: React.FC<SingleAnswerTestProps> = ({
  quizAnswers,
  page,
}) => {
  const dispatch = useDispatch();
  const answers = quizAnswers[page]?.question?.answers;

  const handlePage = (answers: string[]) => {
    switch (page) {
      case 0:
        return dispatch(setIsWorkingOut(answers)), dispatch(pageNext());
      case 1:
        return dispatch(setIsSmoking(answers)), dispatch(pageNext());
      case 3:
        return dispatch(setIsAsthmatic(answers)), dispatch(pageNext());
      case 4:
        return dispatch(setIsHeart(answers)), dispatch(pageNext());
      default:
        dispatch(pageNext());
    }
  };

  return (
    <Box>
      {answers?.map((answers, i) => (
        <Box key={i}>
          <QuizAnswer
            onClick={() => handlePage(answers as unknown as string[])}
          >
            {answers as unknown as React.ReactNode}
          </QuizAnswer>
        </Box>
      ))}
    </Box>
  );
};
