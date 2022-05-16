import React, { useState, useEffect } from "react";
import { QuizQuestionsContainer } from "components";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";

import {
  selectUserData,
  selectMultipleAnswersGoals,
  selectState,
} from "state/selectors";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import { setUserData, setMultipleChoiceGoals } from "state/slice";
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
  {
    id: "8",
    title: "Other",
    quizAnswer6: "Other",
  },
];

const TestThree: React.FC = () => {
  const dispatch = useDispatch();
  const multipleGoals = useSelector(selectMultipleAnswersGoals);
  const state = useSelector(selectState);
  console.log(state, "overall STATE RIGHT HERE");

  console.log(multipleGoals, "this is user data from redux !");

  const [selectedUser, setSelectedUser] = useState<any>([]);
  const userArray = selectedUser;
  console.log(selectedUser, "from local state");

  const handleStateButton = () => {
    dispatch(setMultipleChoiceGoals(selectedUser));
    navigate("/loading");
  };

  // if (userArray.includes("None")) {
  //   setSelectedUser([]);
  // }

  return (
    <>
      <ProgressBar width="75%" />
      <SectionWrapper>
        <ContentWrapper>
          <Typography color="primary" type="h2" textAlign={"center"}>
            Which of the following conditions apply to you?{" "}
          </Typography>
          <FlexWrapper
            alignItems="center"
            alignItems="center"
            mt="s50"
            flexWrap="wrap"
            justifyContent="center"
            mt="s50"
          >
            {STEP_SIX.map(({ title, id, quizAnswer6 }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser((selectedUser) =>
                    selectedUser.concat(quizAnswer6)
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
    </>
  );
};

export default TestThree;
