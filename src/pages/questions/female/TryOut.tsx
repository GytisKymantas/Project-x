import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputForm } from "components/molecules/checkoutContainer/measurementsContainer/InputForm";
import { Check } from "assets/images";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
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
} from "components";

const TryOut: React.FC = () => {
  const dispatch = useDispatch();
  const globalstate = useSelector(selectState);
  console.log(globalstate, "from global state");

  const [arrayIndex, setArrayIndex] = useState(0);
  const [selectedUserState, setSelectedUserState] = useState<any>([]);
  const [multipleChoiceGoals, setMultipleChoiceGoals] = useState<any>([]);
  const [border, setBorder] = useState();
  const [selectedUser, setSelectedUser] = useState({});
  const [workAnswer, setWorkAnswer] = useState({});
  const [smokingAnswer, setSmokingAnswer] = useState({});
  const [asthmaticAnswer, setAsthmaticAnswer] = useState({});
  const [heartAnswer, setHeartAnswer] = useState({});

  console.log(selectedUserState, "seleted user state");
  if (selectedUserState.length > 5) {
    console.log("it is more than 5 !!!!");
  }

  const testFunction = () => {
    if (selectedUserState.length < 6) {
      console.log("it is more than 5 !!!!");
    } else {
      setSelectedUserState((array) => array.concat(quizAnswer));
    }
  };

  const handleUserState = () => {
    dispatch(setMultipleChoice(selectedUserState));
    setArrayIndex(arrayIndex + 1);
  };

  if (selectedUserState.includes("None")) {
    setSelectedUserState([]);
  }

  if (multipleChoiceGoals.includes("None")) {
    setMultipleChoiceGoals([]);
  }

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

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
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          {ANSWERS[arrayIndex].question.title}{" "}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
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
                        multipleChoiceGoals.includes(quizAnswer)
                          ? "solid 2px black"
                          : "solid 2px transparent"
                      }
                      onClick={() =>
                        setMultipleChoiceGoals((array) =>
                          array.concat(quizAnswer)
                        )
                      }
                      key={id}
                    >
                      {title}
                    </QuizAnswer>
                    {multipleChoiceGoals.includes(quizAnswer) && (
                      <Box position={"absolute"} top="28%" left="5%">
                        <Check />
                      </Box>
                    )}
                  </Box>
                )}

                {isWorkingOut && (
                  <Box
                    key={id}
                    onClick={() =>
                      setWorkAnswer({
                        quizAnswer,
                      })
                    }
                  >
                    <QuizAnswer onClick={handleClick} key={id}>
                      {title}
                    </QuizAnswer>
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

                {showGoalsSubmit && multipleChoiceGoals.length < 1 && (
                  <Box>
                    <QuizAnswer onClick={handleUserState} disabled isSubmit>
                      submit
                    </QuizAnswer>
                  </Box>
                )}

                {showGoalsSubmit && multipleChoiceGoals.length >= 1 && (
                  <Box>
                    <QuizAnswer onClick={handleUserState} isSubmit>
                      submit
                    </QuizAnswer>
                  </Box>
                )}
              </Box>
            )
          )}
          <ReturnButton width="100px" onClick={handleReturnClick}>
            return
          </ReturnButton>
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TryOut;
