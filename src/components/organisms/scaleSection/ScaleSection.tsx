import React from "react";
import {
  SectionWrapper,
  Typography,
  Container,
  ScaleResult,
  Box,
  GridWrapper,
  QuizStartButton,
  CaloricCounter,
} from "components";
import { FlexWrapper } from "components/atoms/wrappers/FlexWrapper";

export const ScaleSection: React.FC = () => (
  <SectionWrapper>
    <Container mb={{ _: "s20", ltablet: "s50" }}>
      <Typography fontWeight="fw700" color="primary" textAlign="center">
        Based on quiz results, you will be
      </Typography>
    </Container>
    <GridWrapper
      gridTemplateColumns={{
        _: "repeat(1,1fr)",
        ltablet: "repeat(2,1fr)",
      }}
      display={{ _: "block", ltablet: "flex" }}
      justifyContent="center"
      p="s40"
    >
      <ScaleResult />
      <CaloricCounter />
    </GridWrapper>
    <FlexWrapper justifyContent="center" margin="s0auto">
      <QuizStartButton width="12.5rem">Get the product!</QuizStartButton>
    </FlexWrapper>
  </SectionWrapper>
);
