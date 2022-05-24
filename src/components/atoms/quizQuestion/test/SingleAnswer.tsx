import React, { useEffect } from "react";
import { Box, QuizAnswer } from "components";
import { useAppDispatch } from "state/store";
import { Check } from "assets/images";
// import QuizHeaderTest from "./quiz"
import { QuizHeaderTest } from "../../../molecules/quizHeader/QuizHeaderTest";
import { selectMultipleChoice, selectQuizAnswers } from "state/selectors";
import { useSelector, useDispatch } from "react-redux";
import { pageNext } from "state/slices/pageSlice";
import {
  setIsAsthmatic,
  setIsWorkingOut,
  setIsSmoking,
  setIsHeart,
} from "state/slices/quizAnswersSlice";

interface SingleAnswerTestProps {
  answers: any;
  page: any;
}

export const SingleAnswer: React.FC<SingleAnswerTestProps> = ({
  answers,
  page,
}) => {
  const multipleAnswers = useSelector(selectMultipleChoice);
  console.log(multipleAnswers, "from isAsthmatic redux ");
  const dispatch = useAppDispatch();

  const handlePage = (answers) => {
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
  console.log(handlePage);

  return (
    <Box>
      {answers[page]?.question?.answers.map((answers, i) => (
        <Box key={i}>
          <QuizAnswer onClick={() => handlePage(answers)}>{answers}</QuizAnswer>
        </Box>
      ))}
    </Box>
  );
};
