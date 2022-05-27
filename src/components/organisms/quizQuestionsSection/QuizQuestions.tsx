import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageBack } from "state/slices/pageSlice";
import { Box, InputFormContainer, ReturnButton } from "components";
import { QuizContainerWrapper } from "../../atoms/wrappers/QuizContainerWrapper";
import { fetchUsersAction } from "state/sagasActions";
import { selectPage, selectSetStatus } from "state/selectors";
import { selectQuizData } from "state/selectors";
import { setStatus } from "state/slices/quizDataSlice";
import { SingleChoiceAnswer } from "components/atoms/singleChoiceAnswer/SingleAnswer";
import { MultipleChoiceAnswer } from "components/atoms/multipleChoiceAnswer/MultipleChoiceAnswer";

export const QuizQuestionsSection: React.FC = () => {
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const ANSWERS_ARRAY = useSelector(selectQuizData);
  const status = useSelector(selectSetStatus);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const handlePage = () => {
    dispatch(pageBack());
  };

  const Questions = () => {
    switch (page) {
      case 0:
        return <SingleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 1:
        return <SingleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 2:
        return <MultipleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 3:
        return <SingleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 4:
        return <SingleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 5:
        return <MultipleChoiceAnswer answers={ANSWERS_ARRAY} page={page} />;
      case 6:
        return <InputFormContainer />;
    }
  };
  return (
    <>
      <QuizContainerWrapper answers={ANSWERS_ARRAY} page={page}>
        <Box>{Questions()}</Box>
      </QuizContainerWrapper>

      <ReturnButton width="6.25rem" onClick={() => handlePage()} />
    </>
  );
};
