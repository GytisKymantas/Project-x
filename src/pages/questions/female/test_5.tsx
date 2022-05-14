import React, { useState, useEffect } from "react";
import { QuizQuestionsContainer } from "components";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { selectUserData } from "state/selectors";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import { setUserData } from "state/slice";
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
    quizAnswer5: "Yes",
  },
  {
    id: "2",
    title: "No",
    quizAnswer5: "No",
  },
];

const TestFive: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer5: "",
  });
  console.log(selectedUser, "from test_1");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(
    quizAnswer.payload.user.quiz_answers.quizAnswer,
    "bullseye from 5"
  );

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          Do you or does your family have history with heart issues?{" "}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {STEP_FIVE.map(({ title, id, quizAnswer5 }: any) => (
            <Box
              key={id}
              onClick={() =>
                setSelectedUser({
                  quizAnswer5,
                })
              }
            >
              <QuizAnswer
                onClick={() => {
                  navigate("/questions/female/test_6");
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
  );
};

export default TestFive;
