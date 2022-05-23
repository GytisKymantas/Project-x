import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputForm } from "components/molecules/inputForm/InputForm";
import { Check } from "assets/images";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { WIDTH_SCALE } from "constants/Constants";
import {
  setQuizAnswers,
  setIsAsthmatic,
  setIsSmoking,
  setIsWorkingOut,
  setIsHeart,
} from "state/slice";
import { setMultipleChoice } from "state/slice";
import { setMultipleChoiceGoals } from "state/slice";
import { ANSWERS } from "constants/QuestionMassive";
import { selectState } from "state/selectors";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
  QuizAnswer,
  ProgressBar,
  QuizHeader,
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

  const handleUserState = () => {
    dispatch(setMultipleChoice(selectedUserState));
    setArrayIndex(arrayIndex + 1);
  };

  const handleGoalsChoiceState = () => {
    dispatch(setMultipleChoiceGoals(multipleGoals));
    setArrayIndex(arrayIndex + 1);
  };

  // const massiveFunction = (quizAnswer,uniqueID,array) => {

  //   Switch(uniqueID) {
  //     case "1":
  //       return setWorkAnswer({quizAnswer});
  //       dispatch(setIsWorkingOut(array));
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
            {ANSWERS[arrayIndex].question.answers.map(
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
                  {isMultiple && (
                    <Box key={id} position="relative">
                      <QuizAnswer
                        border={
                          selectedUserState.includes(quizAnswer)
                            ? "solid 2px black"
                            : "solid 2px transparent"
                        }
                        onClick={
                          selectedUserState.includes(quizAnswer)
                            ? () =>
                                setSelectedUserState((array) =>
                                  array.filter((e) => !e.includes(quizAnswer))
                                )
                            : () =>
                                setSelectedUserState((array) =>
                                  array.concat(quizAnswer)
                                )
                        }
                        key={id}
                      >
                        {title}
                      </QuizAnswer>
                      {selectedUserState.includes(quizAnswer) && (
                        <Box position={"absolute"} top="28%" left="5%">
                          <Check />
                        </Box>
                      )}
                    </Box>
                  )}
                  {isMultipleChoice && (
                    <Box position="relative" key={id}>
                      <QuizAnswer
                        border={
                          multipleGoals.includes(quizAnswer)
                            ? "solid 2px black"
                            : "solid 2px transparent"
                        }
                        onClick={
                          multipleGoals.includes(quizAnswer)
                            ? () =>
                                setMultipleGoals((array) =>
                                  array.filter((e) => !e.includes(quizAnswer))
                                )
                            : () =>
                                setMultipleGoals((array) =>
                                  array.concat(quizAnswer)
                                )
                        }
                        key={id}
                      >
                        {title}
                      </QuizAnswer>
                      {multipleGoals.includes(quizAnswer) && (
                        <Box position={"absolute"} top="28%" left="5%">
                          <Check />
                        </Box>
                      )}
                    </Box>
                  )}
                  {isWorkingOut && (
                    <Box
                      key={id}
                      position="relative"
                      onClick={() =>
                        setWorkAnswer({
                          quizAnswer,
                        })
                      }
                    >
                      <QuizAnswer onClick={handleClick} key={id}>
                        {title}
                      </QuizAnswer>
                      {isWorkingOut === quizAnswer && (
                        <Box position={"absolute"} top="28%" left="5%">
                          <Check />
                        </Box>
                      )}
                    </Box>
                  )}
                  {isAsthmatic && (
                    <Box
                      key={id}
                      onClick={() =>
                        setAsthmaticAnswer({
                          quizAnswer,
                        })
                      }
                    >
                      <QuizAnswer onClick={handleClick} key={id}>
                        {title}
                      </QuizAnswer>
                    </Box>
                  )}
                  {isSmoker && (
                    <Box
                      key={id}
                      onClick={() =>
                        setSmokingAnswer({
                          quizAnswer,
                        })
                      }
                    >
                      <QuizAnswer onClick={handleClick} key={id}>
                        {title}
                      </QuizAnswer>
                    </Box>
                  )}
                  {isMeasurement && <InputForm />}
                  {isHeart && (
                    <Box
                      key={id}
                      onClick={() =>
                        setHeartAnswer({
                          quizAnswer,
                        })
                      }
                    >
                      <QuizAnswer onClick={handleClick} key={id}>
                        {title}
                      </QuizAnswer>
                    </Box>
                  )}
                  {showSubmit && selectedUserState.length < 1 && (
                    <Box>
                      <QuizAnswer onClick={handleUserState} disabled isSubmit>
                        submit
                      </QuizAnswer>
                    </Box>
                  )}

                  {showSubmit && selectedUserState.length >= 1 && (
                    <Box>
                      <QuizAnswer onClick={handleUserState} isSubmit>
                        submit
                      </QuizAnswer>
                    </Box>
                  )}

                  {showGoalsSubmit && multipleGoals.length < 1 && (
                    <Box>
                      <QuizAnswer
                        onClick={handleGoalsChoiceState}
                        disabled
                        isSubmit
                      >
                        submit
                      </QuizAnswer>
                    </Box>
                  )}

                  {showGoalsSubmit && multipleGoals.length >= 1 && (
                    <Box>
                      <QuizAnswer onClick={handleGoalsChoiceState} isSubmit>
                        submit
                      </QuizAnswer>
                    </Box>
                  )}
                </Box>
              )
            )}
          </FlexWrapper>
          <ReturnButton width="100px" onClick={handleReturnClick}>
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TryOut;
