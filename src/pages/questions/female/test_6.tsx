import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { QuizAnswer } from "components";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";
import { navigate } from "gatsby";
import { setMultipleChoiceGoals } from "state/slice";
import { STEP_SIX } from "constants/Questions";

import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";

const TestThree: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<any>([]);

  const handleStateButton = () => {
    dispatch(setMultipleChoiceGoals(selectedUser));
    navigate("/");
  };

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
          <Box>
            <ReturnButton
              width="100px"
              onClick={() => navigate("/questions/female/test_5")}
            >
              return
            </ReturnButton>
          </Box>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestThree;
