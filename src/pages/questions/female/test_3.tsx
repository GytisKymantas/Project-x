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

export const STEP_SIX = [
  {
    id: "1",
    title: "High blood pressure",
    quizAnswer3: "High Blood Pressure",
  },
  {
    id: "2",
    title: "Overweight",
    quizAnswer3: "Overweight",
  },
  {
    id: "3",
    title: "Diabetes",
    quizAnswer3: "Diabetes",
  },
  {
    id: "4",
    title: "Bulimia",
    quizAnswer3: "Bulimia",
  },
  {
    id: "5",
    title: "Chest discomfort",
    quizAnswer3: "Chest",
  },
  {
    id: "6",
    title: "Shortness of Breath",
    quizAnswer3: "Shortness",
  },
  {
    id: "7",
    title: "Anxiety",
    quizAnswer3: "Anxiety",
  },
  {
    id: "8",
    title: "Other",
    quizAnswer3: "Other",
  },
  {
    id: "9",
    title: "None",
    quizAnswer3: "None",
  },
];

const TestThree: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState<any>([]);

  console.log(selectedUser, "from test_2");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(
    quizAnswer.payload.user.quiz_answers.quizAnswer,
    "bullseye from 3"
  );

  // useEffect(() => {
  //   dispatch(setQuizAnswers(selectedUser));
  // }, [selectedUser]);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          Which of the following conditions apply to you?{" "}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {STEP_SIX.map(({ title, id, quizAnswer3 }: any) => (
            <Box
              key={id}
              onClick={() =>
                setSelectedUser((selectedUser) =>
                  selectedUser.concat(quizAnswer3)
                )
              }
            >
              <QuizAnswer
                onClick={() => {
                  navigate("/questions/female/test_4");
                }}
                key={id}
              >
                {title}
              </QuizAnswer>
            </Box>
          ))}
          <Box bg="red" onClick={() => dispatch(setQuizAnswers(selectedUser))}>
            <button
              type="button"
              onClick={() => {
                navigate("/questions/female/test_4");
              }}
            >
              {" "}
              bunn
            </button>
          </Box>
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

export default TestThree;
