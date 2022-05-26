import React from "react";
import { Box, QuizAnswer } from "components";
import { useDispatch } from "react-redux";
import { pageNext } from "state/slices/pageSlice";
import { IQuizData, IQuestionQuizData } from "state/types";
import {
  setIsAsthmatic,
  setIsWorkingOut,
  setIsSmoking,
  setIsHeart,
} from "state/slices/quizAnswersSlice";

interface SingleAnswerTestProps {
  answers: IQuestionQuizData;
  page: number;
}

export const SingleAnswer: React.FC<SingleAnswerTestProps> = ({
  answers,
  page,
}) => {
  const dispatch = useDispatch();

  const handlePage = (answers: Array<string>) => {
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
      {answers[page].question.answers.map((answers: string[], i: number) => (
        <Box key={i}>
          <QuizAnswer onClick={() => handlePage(answers)}>{answers}</QuizAnswer>
        </Box>
      ))}
    </Box>
  );
};
