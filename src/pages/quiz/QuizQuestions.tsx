import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageBack } from "state/slices/pageSlice";
import { Box, InputFormContainer } from "components";
import { QuizContainerWrapper } from "../../components/atoms/wrappers/QuizContainerWrapper";
import { fetchUsersAction } from "state/sagasActions";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { selectPage } from "state/selectors";
import { selectQuizData } from "state/selectors";
// import { ANSWERS_ARRAY } from "constants/QuestionsArray";

import { IsInputFormTest } from "components/atoms/quizQuestion/test/isInputFormTest";
import { SingleAnswer } from "components/atoms/quizQuestion/test/SingleAnswer";
import { MultipleChoiceAnswer } from "components/atoms/quizQuestion/test/MultipleChoiceAnswer";

export const QuizQuestions: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const ANSWERS_ARRAY = useSelector(selectQuizData);
  // console.log(ANSWERS_ARRAY, "current page");

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const handlePage = () => {
    dispatch(pageBack());
  };

  const NextQuestion = () => {
    switch (page) {
      case 0:
        return <SingleAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 1:
        return <SingleAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 2:
        return <MultipleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 3:
        return <SingleAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 4:
        return <SingleAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 5:
        return <MultipleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 6:
        return <InputFormContainer />;
    }
  };
  return (
    <>
      <QuizContainerWrapper page={page}>
        <Box>{NextQuestion()}</Box>
      </QuizContainerWrapper>
      <ReturnButton width="6.25rem" onClick={() => handlePage()}>
        Return
      </ReturnButton>
    </>
  );
};
