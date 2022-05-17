import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STEP_FIVE } from "constants/Questions";
import { setQuizAnswers } from "state/slice";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { navigate } from "gatsby";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
  QuizAnswer,
} from "components";

const TestFive: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState({
    quizAnswer5: "",
  });

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <>
      <ProgressBar width="65%" />
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
          <ReturnButton
            width="100px"
            onClick={() => navigate("/questions/female/test_4")}
          >
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestFive;
