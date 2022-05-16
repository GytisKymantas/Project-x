import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { setQuizAnswers } from "state/slice";
import { setMultipleChoice } from "state/slice";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { navigate } from "gatsby";
// import setMultipleChoice from "state/slice";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import {
  selectMultipleAnswers,
  selectUserData,
  selectState,
} from "state/selectors";

import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";
import { arrayBuffer } from "stream/consumers";

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
    title: "Sleep",
    quizAnswer3: "Sleep",
  },
  {
    id: "9",
    title: "Other",
    quizAnswer3: "Other",
  },
  {
    id: "10",
    title: "None",
    quizAnswer3: "None",
  },
];

const TestThree: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const quizAnswer = useSelector(setQuizAnswers);
  const multiple = useSelector(selectMultipleAnswers);
  const state = useSelector(selectState);

  // console.log(userData, "this is user data from redux !");
  console.log(multiple, "this is multiple data from redux !");
  console.log(state, "overall STATE RIGHT HERE");
  const [selectedUser, setSelectedUser] = useState<any>([]);
  console.log(selectedUser, "from local state");
  const userArray = selectedUser;

  const handleStateButton = () => {
    dispatch(setMultipleChoice(userArray));
    navigate("/questions/female/test_4");
  };

  if (userArray.includes("None")) {
    setSelectedUser([]);
  }

  //   userArray.pop("Other");
  // }
  // if (userArray.includes("Pressure")) {
  //   userArray.pop("Pressure");
  // }
  // if (userArray.includes("Overweight")) {
  //   userArray.pop("Overweight");
  // }
  // if (userArray.includes("Diabetes")) {
  //   userArray.pop("Diabetes");
  // }
  // if (userArray.includes("Bulimia")) {
  //   userArray.pop("Bulimia");
  // }
  // if (userArray.includes("Chest")) {
  //   userArray.pop("Chest");
  // }
  // if (userArray.includes("Shortness")) {
  //   userArray.pop("Shortness");
  // }
  // if (userArray.includes("Anxiety")) {
  //   userArray.pop("Anxiety");
  // }

  return (
    <>
      <ProgressBar width="35%" />
      <SectionWrapper>
        <ContentWrapper>
          <Typography color="primary" type="h2" textAlign={"center"}>
            Which of the following conditions apply to you?{" "}
          </Typography>
          <FlexWrapper
            alignItems="center"
            mt="s50"
            flexWrap="wrap"
            justifyContent="center"
          >
            {STEP_SIX.map(({ title, id, quizAnswer3 }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser((array) => array.concat(quizAnswer3))
                }
                // onClick={handleNumber(quizAnswer3)}
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
