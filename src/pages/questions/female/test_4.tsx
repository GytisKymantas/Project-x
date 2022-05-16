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

export const STEP_FIVE = [
  {
    id: "1",
    title: "Yes",
    quizAnswer4: "Yes",
  },
  {
    id: "2",
    title: "No",
    quizAnswer4: "No",
  },
  {
    id: "3",
    title: "Not sure",
    quizAnswer4: "Not",
  },
];

const TestFour: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer4: "",
  });
  console.log(selectedUser, "from test_1");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(
    quizAnswer.payload.user.quiz_answers.quizAnswer,
    "bullseye from 4"
  );

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <>
      <ProgressBar width="45%" />
      <SectionWrapper>
        <ContentWrapper>
          <Typography color="primary" type="h2" textAlign={"center"}>
            Are you asthmatic?{" "}
          </Typography>
          <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
            {STEP_FIVE.map(({ title, id, quizAnswer4 }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser({
                    quizAnswer4,
                  })
                }
              >
                <QuizAnswer
                  onClick={() => {
                    navigate("/questions/female/test_5");
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

export default TestFour;
