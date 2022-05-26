import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pageBack } from "state/slices/pageSlice";
import { Box, InputFormContainer, ReturnButton } from "components";
import { QuizContainerWrapper } from "../../atoms/wrappers/QuizContainerWrapper";
import { fetchUsersAction } from "state/sagasActions";
import { selectPage } from "state/selectors";
import { selectQuizData } from "state/selectors";
import { SingleAnswer } from "components/atoms/singleAnswer/SingleAnswer";
import { MultipleChoiceAnswer } from "components/atoms/multipleChoiceAnswer/MultipleChoiceAnswer";

export const QuizQuestionsSection: React.FC = () => {
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const ANSWERS_ARRAY = useSelector(selectQuizData);

  useEffect(() => {
    dispatch(fetchUsersAction());
    isLoading(false);
  }, []);

  const handlePage = () => {
    dispatch(pageBack());
  };

  const Questions = () => {
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
      <QuizContainerWrapper answers={ANSWERS_ARRAY} page={page}>
        <Box>{Questions()}</Box>
      </QuizContainerWrapper>
      <ReturnButton width="6.25rem" onClick={() => handlePage()} />
    </>
  );
};
