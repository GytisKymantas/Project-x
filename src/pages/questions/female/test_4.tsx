import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizAnswer } from "components";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { STEP_FOUR } from "constants/Questions";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";

const TestFour: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({
    quizAnswer4: "",
  });

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
            {STEP_FOUR.map(({ title, id, quizAnswer4 }: any) => (
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
          <ReturnButton
            width="100px"
            onClick={() => navigate("/questions/female/test_3")}
          >
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestFour;
