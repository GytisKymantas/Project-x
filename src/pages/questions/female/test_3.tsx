import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMultipleChoice } from "state/slice";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";
import { navigate } from "gatsby";
import { STEP_THREE } from "constants/Questions";
import { ReturnButton } from "components/atoms/buttons/ReturnButton";

import {
  Typography,
  FlexWrapper,
  QuizAnswer,
  ContentWrapper,
  Box,
  SectionWrapper,
} from "components";

const TestThree: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<any>([]);
  const userArray = selectedUser;

  const handleStateButton = () => {
    dispatch(setMultipleChoice(userArray));
    navigate("/questions/female/test_4");
  };

  if (userArray.includes("None")) {
    setSelectedUser([]);
  }

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
            {STEP_THREE.map(({ title, id, quizAnswer3 }: any) => (
              <Box
                key={id}
                onClick={() =>
                  setSelectedUser((array) => array.concat(quizAnswer3))
                }
              >
                <QuizAnswer key={id}>{title}</QuizAnswer>
              </Box>
            ))}
            <Box>
              <QuizAnswer onClick={handleStateButton} isSubmit>
                submit
              </QuizAnswer>
            </Box>
          </FlexWrapper>
          <ReturnButton
            width="100px"
            onClick={() => navigate("/questions/female/test_2")}
          >
            return
          </ReturnButton>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default TestThree;
