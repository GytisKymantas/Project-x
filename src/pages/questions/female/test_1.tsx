import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { STEP_ONE } from "constants/QuestionConstants";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { selectQuizAnswers, selectUserData } from "state/selectors";
import { setQuizAnswers } from "state/slice";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { navigate } from "gatsby";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";

// export const STEP_ONE = [
//   {
//     title: "2-3 hrs per week",
//     id: "2342",
//     quizAnswer: "2-3 hrs per week",
//   },
//   {
//     title: "4-6 hrs per week",
//     id: "23424",
//     quizAnswer: "4-6 hrs per week",
//   },
//   {
//     title: "6-9 hrs per week",
//     id: "22342",
//     quizAnswer: "6-9 hrs per week",
//   },
// ];

const TestOne: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState({
    quizAnswer: "",
  });
  const dispatch = useDispatch();

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
            <ReturnButton width="100px" onClick={() => navigate("/")}>
              return
            </ReturnButton>
          </FlexWrapper>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestOne;
