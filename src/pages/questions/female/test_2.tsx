import React, { useState, useEffect } from "react";
import { QuizQuestionsContainer } from "components";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { selectUserData } from "state/selectors";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import { setUserData } from "state/slice";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";
export const STEP_THREE = [
  {
    id: 1,
    title: "Yes",
    quizAnswer2: "True",
  },
  {
    id: 2,
    title: "No",
    quizAnswer2: "False",
  },
];

const TestTwo: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer2: "",
  });
  console.log(selectedUser, "from test_2");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(
    quizAnswer.payload.user.quiz_answers.quizAnswer,
    "bullseye from 2"
  );

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <>
      <ProgressBar width="25%" />
      <SectionWrapper>
        <ContentWrapper>
          <Typography color="primary" type="h2" textAlign={"center"}>
            Have you consumed any type of tobacco products in the past 14 days
          </Typography>
          <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
            {STEP_THREE.map(({ title, id, quizAnswer2 }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser({
                    quizAnswer2,
                  })
                }
              >
                <QuizAnswer
                  onClick={() => {
                    navigate("/questions/female/test_3");
                  }}
                  key={id}
                >
                  {title}
                </QuizAnswer>
              </Box>
            ))}
          </FlexWrapper>
          <Box
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Navigate to checkout
          </Box>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestTwo;
