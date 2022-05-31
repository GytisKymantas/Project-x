import React, { useEffect } from "react";
import {
  Box,
  InputFormContainer,
  ReturnButton,
  Loader,
  QuizContainerWrapper,
  SingleChoiceAnswer,
  MultipleChoiceAnswer,
} from "components";
import { useSelector, useDispatch } from "react-redux";
import { pageBack } from "state/slices/pageSlice";
import { fetchUsersAction } from "state/sagasActions";
import { selectPage } from "state/selectors";
import { selectQuizData } from "state/selectors";

export const QuizQuestionsSection: React.FC = () => {
  const ANSWERS_ARRAY = useSelector(selectQuizData);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const handlePage = () => {
    dispatch(pageBack());
  };

  const Questions = () => {
    switch (page) {
      case 0:
        return <SingleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 1:
        return <SingleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 2:
        return <MultipleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 3:
        return <SingleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 4:
        return <SingleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 5:
        return <MultipleChoiceAnswer quizAnswers={ANSWERS_ARRAY} page={page} />;
      case 6:
        return <InputFormContainer />;
      case 7:
    }
  };
  return (
    <>
      <QuizContainerWrapper answers={ANSWERS_ARRAY} page={page}>
        <Box left="40%" position="absolute" top="90%">
          {ANSWERS_ARRAY.length === 0 && <Loader />}
        </Box>
        <Box>{Questions()}</Box>
      </QuizContainerWrapper>
      {ANSWERS_ARRAY.length !== 0 && (
        <ReturnButton onClick={() => handlePage()} width="6.25rem" />
      )}
    </>
  );
};
