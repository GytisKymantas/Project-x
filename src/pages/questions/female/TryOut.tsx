import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuizAnswers } from "state/slice";
import { navigate } from "gatsby";

import {
  Typography,
  FlexWrapper,
  ContentWrapper,
  Box,
  SectionWrapper,
  QuizAnswer,
} from "components";

interface TryOutProps {
  question?: string;
  answers: string[];
  linkTo?: string;
}
const TryOut: React.FC<TryOutProps> = ({ question, answers, linkTo }) => {
  const dispatch = useDispatch();
  const quizAnswer = useSelector(setQuizAnswers);

  const [selectedUser, setSelectedUser] = useState({
    quizAnswer: "",
  });

  useEffect(() => {
    dispatch(setQuizAnswers(selectedUser));
  }, [selectedUser]);

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Typography color="primary" type="h2" textAlign={"center"}>
          {question}{" "}
        </Typography>
        <FlexWrapper flexDirection="column" alignItems="center" mt="s50">
          {answers.map(({ title, id, quizAnswer }: any) => (
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
                  navigate(`/questions/female/${linkTo}`);
                }}
                key={id}
              >
                {title}
              </QuizAnswer>
            </Box>
          ))}
        </FlexWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default TryOut;
