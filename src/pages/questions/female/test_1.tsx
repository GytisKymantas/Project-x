import React, { useState, useEffect } from "react";
import { QuizQuestionsContainer, QuizStartButton } from "components";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { selectUserData } from "state/selectors";
import { setQuizAnswers } from "state/slice";
import { Arrow } from "assets/images";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { navigate } from "gatsby";
import { setUserData } from "state/slice";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  BaseButton,
  Box,
  SectionWrapper,
} from "components";

export const STEP_ONE = [
  {
    title: "2-3 hrs per week",
    id: "2342",
    quizAnswer: "2-3 hrs per week",
  },
  {
    title: "4-6 hrs per week",
    id: "23424",
    quizAnswer: "4-6 hrs per week",
  },
  {
    title: "6-9 hrs per week",
    id: "22342",
    quizAnswer: "6-9 hrs per week",
  },
];

const TestOne: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer: "",
  });
  console.log(selectedUser, "from test_1");
  const handleStateButton = () => dispatch(setQuizAnswers(selectedUser));
  console.log(quizAnswer.payload.user.quiz_answers.quizAnswer, "bullseye");

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <>
      <ProgressBar width="10%" />
      <SectionWrapper>
        <ContentWrapper>
          <Typography color="primary" type="h2" textAlign={"center"}>
            How often do you do physical activity?
          </Typography>
          <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
            {STEP_ONE.map(({ title, id, quizAnswer }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser({
                    quizAnswer,
                  })
                }
              >
                <QuizAnswer
                  onClick={() => {
                    navigate("/questions/female/test_2");
                  }}
                  key={id}
                >
                  {title}
                </QuizAnswer>
              </Box>
            ))}
            <QuizStartButton
              type="button"
              width="20%"
              onClick={() => {
                navigate("/questions/female/test_2");
              }}
            >
              <Arrow /> Go back
            </QuizStartButton>
          </FlexWrapper>

          {/* <Link to="/questions/female/test_2">Link</Link> */}
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestOne;
