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

const ScaleSection: React.FC = () => (
  <SectionWrapper>
    <Container mb="s50">
      <Typography fontWeight="fw700" color="primary" textAlign="center">
        Based on quiz results, you will be
      </Typography>
    </Container>
    <GridWrapper
      gridTemplateColumns="repeat(2,1fr)"
      display="flex"
      justifyContent="center"
      p="s80"
    >
      <ScaleResult />
      <CaloricCounter />
    </GridWrapper>
    <Box margin="s0auto">
      <QuizStartButton width="12.5rem">Get the product!</QuizStartButton>
    </Box>
  </SectionWrapper>
);

export default ScaleSection;
