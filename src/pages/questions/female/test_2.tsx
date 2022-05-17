import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { QuizAnswer } from "components";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import { STEP_TWO } from "constants/Questions";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";

const TestTwo: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({
    quizAnswer2: "",
  });

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
            {STEP_TWO.map(({ title, id, quizAnswer2 }: any) => (
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
          <ReturnButton
            width="100px"
            onClick={() => navigate("/questions/female/test_1")}
          >
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestTwo;
