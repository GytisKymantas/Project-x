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
    quizAnswer3: "Pressure",
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
];

const TestTest: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);

  console.log(userData, "this is user data from redux !");
  console.log(quizAnswer, "this is quiz data from redux !");

  const [selectedUser, setSelectedUser] = useState<any>({
    Pressure: "",
    Overweight: "",
    Diabetes: "",
  });

  console.log(selectedUser, "from test_2");

  //   const handleStateButton = () => {
  //     dispatch(setQuizAnswers(selectedUser));
  //     navigate("/questions/female/test_4");
  //   };

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
              <QuizAnswer key={id}>{title}</QuizAnswer>
            </Box>
          ))}
          <QuizAnswer onClick={handleStateButton} isSubmit>
            submit
          </QuizAnswer>
        </FlexWrapper>
        {/* <Box
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Navigate to checkout
        </Box> */}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TestTest;
