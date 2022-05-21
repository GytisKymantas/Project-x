import React from "react";
import {
  SectionWrapper,
  Typography,
  Container,
  ScaleResult,
  FlexWrapper,
  Box,
  GridWrapper,
  QuizStartButton,
} from "components";
import { CaloricCounter } from "components/atoms/caloricCounter/CaloricCounter";

const ScaleSection: React.FC = () => {
  return (
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
        p="5rem"
      >
        <ScaleResult />
        <CaloricCounter />
      </GridWrapper>
      <Box margin="s0auto">
        <QuizStartButton width="200px">Get the product!</QuizStartButton>
      </Box>
    </SectionWrapper>
  );
};

export default ScaleSection;
