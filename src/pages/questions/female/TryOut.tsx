import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check } from "assets/images";
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
import { navigate } from "gatsby";
import { selectQuizAnswers } from "state/selectors";

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

  console.log(ANSWERS);
  // console.log(workAnswer, "this is work answer");
  // console.log(smokingAnswer, "this is smoking answer");
  // console.log(asthmaticAnswer, "this is asthmatic answer");
  // console.log(heartAnswer, "this is heart answer");

  // const userArray = selectedUserState;
  console.log(selectedUserState, "from local userstate");

  const handleUserState = () => {
    dispatch(setMultipleChoice(selectedUserState));
    setArrayIndex(arrayIndex + 1);
  };
  const handleGoalsState = () => {
    // dispatch(setMultipleChoiceGoals(multipleChoiceGoals));
    navigate("/landing");
    // setArrayIndex(arrayIndex + 1);
  };

  const testFunction = (quizAnswer) => {
    if (selectedUserState.includes(quizAnswer) === false) {
      setSelectedUserState((array) => array.concat(quizAnswer));
    }
    return;
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

  // const handleWorkingOut = () => {
  //   dispatch(setIsWorkingOut(selectedUser));
  // };

  const handleClick = () => {
    const nextQuestion = arrayIndex + 1;
    if (nextQuestion < ANSWERS.length) {
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
              showSubmit,
              showGoalsSubmit,
            }) => (
              <Box key={id}>
                {isMultiple && (
                  <Box
                    key={id}
                    position="relative"
                    // onClick={() => setBorder(id)}
                  >
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
                      // onClick={() =>
                      //   setSelectedUserState((array) =>
                      //     array.concat(quizAnswer)
                      //   )
                      // }
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
                  <Box
                    position="relative"
                    key={id}
                    // onClick={() =>
                    //   setMultipleChoiceGoals({
                    //     quizAnswer,
                    //   })
                    // }
                  >
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
                {showSubmit && (
                  <Box>
                    <QuizAnswer onClick={handleUserState} isSubmit>
                      submit
                    </QuizAnswer>
                  </Box>
                )}
                {showGoalsSubmit && (
                  <Box>
                    {/* <QuizAnswer
                      width="300px"
                      onClick={handleGoalsState}
                      isSubmit
                    >
                      submit
                    </QuizAnswer> */}
                    <button type="button" onClick={handleGoalsState}>
                      aubmit
                    </button>
                  </Box>
                )}
              </Box>
            )
          )}
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TryOut;
