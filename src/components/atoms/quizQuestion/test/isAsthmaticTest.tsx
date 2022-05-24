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

interface IsAsthmaticTestProps {
  answers: any;
  page: any;
}

export const IsAsthmaticTest: React.FC<IsAsthmaticTestProps> = ({
  answers,
  page,
}) => {
  const multipleAnswers = useSelector(selectMultipleChoice);
  console.log(multipleAnswers, "from isAsthmatic redux ");
  const dispatch = useAppDispatch();

  const handlePage = (answers) => {
    dispatch(setIsAsthmatic(answers));
    dispatch(pageNext());
  };
  console.log(handlePage);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setIsWorkingOut(workAnswer));
  // }, [workAnswer]);

  // const quizAnswer = useSelector(selectQuizAnswers);

  // console.log(quizAnswer, "user data from isworkingouttest");
  // console.log(answers[page]?.question?.answers);

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
