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
    title: "Muscle tone",
    quizAnswer6: "Muscle tone",
  },
  {
    id: "2",
    title: "Strength",
    quizAnswer6: "Strength",
  },
  {
    id: "3",
    title: "Flexibility",
    quizAnswer6: "Flexibility",
  },
  {
    id: "4",
    title: "Reduce stress",
    quizAnswer6: "Stress",
  },
  {
    id: "5",
    title: "Overall health",
    quizAnswer6: "Health",
  },
  {
    id: "6",
    title: "Weight loss",
    quizAnswer6: "Weight",
  },
  {
    id: "7",
    title: "Cardiovascularity",
    quizAnswer6: "Cardiovascularity",
  },
];

const TestSix: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer6: "",
  });
  console.log(selectedUser, "from test_1");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(
    quizAnswer.payload.user.quiz_answers.quizAnswer,
    "bullseye from 6"
  );

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          What are your Fitness goals?{" "}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {STEP_SIX.map(({ title, id, quizAnswer6 }: any) => (
            <Box
              key={id}
              onClick={() =>
                setSelectedUser({
                  quizAnswer6,
                })
              }
            >
              <QuizAnswer
                // onClick={() => {
                //   navigate("/questions/female/test_2");
                // }}
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

export default TestSix;
