import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageBack } from "state/slices/pageSlice";
import { Box, InputFormContainer, ReturnButton } from "components";
import { QuizContainerWrapper } from "../../atoms/wrappers/QuizContainerWrapper";
import { fetchUsersAction } from "state/sagasActions";
import { selectPage } from "state/selectors";
import { selectQuizData } from "state/selectors";
import { SingleChoiceAnswer } from "components/atoms/singleChoiceAnswer/SingleAnswer";
import { MultipleChoiceAnswer } from "components/atoms/multipleChoiceAnswer/MultipleChoiceAnswer";
import { Loader } from "components/atoms/loader/Loader";

export const QuizQuestionsSection: React.FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const ANSWERS_ARRAY = useSelector(selectQuizData);

  useEffect(() => {
    dispatch(fetchUsersAction());
    console.log(ANSWERS_ARRAY, "ARRAY ANSWERS");
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
    }
  };
  return (
    <>
      <QuizContainerWrapper answers={ANSWERS_ARRAY} page={page}>
        <Box position="absolute" top="90%" left="40%">
          {ANSWERS_ARRAY.length === 0 && <Loader />}
        </Box>
        <Box>{Questions()}</Box>
      </QuizContainerWrapper>
      {ANSWERS_ARRAY.length !== 0 && (
        <ReturnButton width="6.25rem" onClick={() => handlePage()} />
      )}
    </>
  );
};
