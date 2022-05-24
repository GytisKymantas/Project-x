import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputForm } from "components/molecules/inputForm/InputForm";
import { Check } from "assets/images";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { WIDTH_SCALE } from "constants/Constants";
import { selectUsers } from "state/selectors";
import {
  setQuizAnswers,
  setIsAsthmatic,
  setIsSmoking,
  setIsWorkingOut,
  setIsHeart,
} from "state/slice";
import { setMultipleChoice } from "state/slice";
import { setMultipleChoiceGoals } from "state/slice";
import { selectState } from "state/selectors";
import { fetchUsersAction } from "state/sagasActions";

import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
  QuizAnswer,
  ProgressBar,
  QuizHeader,
  IsMultiple,
  IsWorkingOut,
  IsMultipleChoice,
  IsAsthmatic,
  IsSmoking,
  IsHeart,
} from "components";

const TryOut: React.FC = () => {
  const dispatch = useDispatch();
  const global = useSelector(selectState);
  console.log(global, "This is global");

  const [arrayIndex, setArrayIndex] = useState(0);
  const [selectedUserState, setSelectedUserState] = useState<any>([]);
  const [multipleGoals, setMultipleGoals] = useState<any>([]);
  const [workAnswer, setWorkAnswer] = useState({});
  const [smokingAnswer, setSmokingAnswer] = useState({});
  const [asthmaticAnswer, setAsthmaticAnswer] = useState({});
  const [heartAnswer, setHeartAnswer] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const ANSWERS = useSelector(selectUsers);
  console.log(ANSWERS, "this is just answers");

  useEffect(() => {
    dispatch(fetchUsersAction());
    setIsLoading(false);
  }, []);

  const handleUserState = () => {
    dispatch(setMultipleChoice(selectedUserState));
    setArrayIndex(arrayIndex + 1);
  };

  const handleGoalsChoiceState = () => {
    dispatch(setMultipleChoiceGoals(multipleGoals));
    setArrayIndex(arrayIndex + 1);
  };

  // const massiveFunction = (uniqueID) => {

  //   Switch(uniqueID) {
  //     case "1":
  //       return dispatch(setIsWorkingOut(array));
  // const nextQuestion = arrayIndex + 1;
  // if (nextQuestion < ANSWERS.length) {
  //   setArrayIndex(nextQuestion);
  // }
  //     case "2";
  //       return setAsthmaticAnswer({quizAnswer});
  //       dispatch(setIsAsthmatic(array));
  //     case "3";
  //       return setSmokingAnswer({quizAnswer});
  //       dispatch(setIsSmoking(array));
  //     case "4";
  //       return setHeartAnswer({quizAnswer});
  //       dispatch(setIsHeart(array));
  //     case "5";
  //       return setHeartAnswer({quizAnswer});
  //       dispatch(setIsHeart(array));

  //   }
  // }

  useEffect(() => {
    if (selectedUserState.includes("None")) {
      setSelectedUserState(["None"]);
    }
  }, []);

  useEffect(() => {
    dispatch(setIsWorkingOut(workAnswer));
  }, [workAnswer]);

  useEffect(() => {
    dispatch(setIsAsthmatic(asthmaticAnswer));
  }, [asthmaticAnswer]);

  useEffect(() => {
    dispatch(setIsSmoking(smokingAnswer));
  }, [smokingAnswer]);

  useEffect(() => {
    dispatch(setIsHeart(heartAnswer));
  }, [heartAnswer]);

  const handleClick = () => {
    const nextQuestion = arrayIndex + 1;
    if (nextQuestion < ANSWERS.length) {
      setArrayIndex(nextQuestion);
    }
  };
  const handleReturnClick = () => {
    const nextQuestion = arrayIndex - 1;
    if (nextQuestion >= 0) {
      setArrayIndex(nextQuestion);
    }
  };
  return (
    <>
      <ProgressBar width={WIDTH_SCALE[arrayIndex]} />
      <SectionWrapper p="1rem 3rem 3rem 3rem">
        <ContentWrapper maxWidth="100%">
          <QuizHeader arrayIndex={arrayIndex} />
          <FlexWrapper
            flexDirection={
              arrayIndex === 2 || arrayIndex === 5 ? "row" : "column"
            }
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            mt="s50"
          >
            {ANSWERS[arrayIndex]?.question.answers.map(
              ({
                title,
                id,
                quizAnswer,
                isMultiple,
                isMultipleChoice,
                isWorkingOut,
                isAsthmatic,
                isSmoker,
                isHeart,
                isMeasurement,
                showSubmit,
                showGoalsSubmit,
              }) => (
                <Box key={id}>
                  {isLoading && <Box>LOADING....</Box>}
                  {isMultiple && (
                    <IsMultiple
                      key={id}
                      title={title}
                      quizAnswer={quizAnswer}
                      selectedUserState={selectedUserState}
                      setSelectedUserState={setSelectedUserState}
                    />
                  )}
                  {isMultipleChoice && (
                    <IsMultipleChoice
                      key={id}
                      title={title}
                      quizAnswer={quizAnswer}
                      multipleGoals={multipleGoals}
                      setMultipleGoals={setMultipleGoals}
                    />
                  )}
                  {isWorkingOut && (
                    <IsWorkingOut
                      key={id}
                      title={title}
                      quizAnswer={quizAnswer}
                      handleClick={handleClick}
                      workAnswer={workAnswer}
                      isWorkingOut
                      setWorkAnswer={setWorkAnswer}
                    />
                  )}
                  {isAsthmatic && (
                    <IsAsthmatic
                      key={id}
                      title={title}
                      handleClick={handleClick}
                      quizAnswer={quizAnswer}
                      setAsthmaticAnswer={setAsthmaticAnswer}
                    />
                  )}
                  {isSmoker && (
                    <IsSmoking
                      key={id}
                      setSmokingAnswer={setSmokingAnswer}
                      quizAnswer={quizAnswer}
                      title={title}
                      handleClick={handleClick}
                    />
                  )}
                  {isMeasurement && <InputForm />}
                  {isHeart && (
                    <IsHeart
                      key={id}
                      title={title}
                      quizAnswer={quizAnswer}
                      setHeartAnswer={setHeartAnswer}
                      handleClick={handleClick}
                    />
                  )}
                  {showSubmit && selectedUserState.length < 1 && (
                    <QuizAnswer onClick={handleUserState} disabled isSubmit>
                      submit
                    </QuizAnswer>
                  )}

                  {showSubmit && selectedUserState.length >= 1 && (
                    <QuizAnswer onClick={handleUserState} isSubmit>
                      submit
                    </QuizAnswer>
                  )}

                  {showGoalsSubmit && multipleGoals.length < 1 && (
                    <QuizAnswer
                      onClick={handleGoalsChoiceState}
                      disabled
                      isSubmit
                    >
                      submit
                    </QuizAnswer>
                  )}

                  {showGoalsSubmit && multipleGoals.length >= 1 && (
                    <QuizAnswer onClick={handleGoalsChoiceState} isSubmit>
                      submit
                    </QuizAnswer>
                  )}
                </Box>
              )
            )}
          </FlexWrapper>
          <ReturnButton width="6.25rem" onClick={handleReturnClick}>
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TryOut;
