import React, { useState, useEffect } from "react";
import { QuizAnswer } from "../buttons/QuizAnswer";
import { useDispatch } from "react-redux";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";
import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  SectionWrapper,
  Box,
} from "components";

interface QuizQuestionsContainerProps {
  answers?: any;
}

export const QuizQuestionsContainer: React.FC<QuizQuestionsContainerProps> = ({
  answers,
}) => {
  const dispatch = useDispatch();
  const question = answers[0].question;
  const page = answers[0].navigatePage;
  const isMultipleChoice = answers[0].multipleChoice;

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer: "",
  });

  {
    !isMultipleChoice &&
      useEffect(() => {
        dispatch(setQuizAnswers(selectedUser));
      }, [selectedUser]);
  }

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          {question}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {answers.map(({ title, id, quizAnswer }: string) => (
            <Box
              key={id}
              onClick={() =>
                setSelectedUser({
                  quizAnswer,
                })
              }
            >
              {!isMultipleChoice ? (
                <QuizAnswer
                  onClick={() => {
                    navigate(`/questions/female/step_${page}`);
                  }}
                  key={id}
                >
                  {title}
                </QuizAnswer>
              ) : (
                <QuizAnswer key={id}>{title}</QuizAnswer>
              )}
            </Box>
          ))}
          {isMultipleChoice && (
            <QuizAnswer
              onClick={() => {
                navigate(`/questions/female/step_${page}`);
              }}
              isSubmit
            >
              submit
            </QuizAnswer>
          )}
        </FlexWrapper>
        {/* <Box position={"absolute"} top="0" left="0" zIndex={-1}>
          <Image src="quizBackGround" />
        </Box> */}
      </ContentWrapper>
    </SectionWrapper>
  );
};
