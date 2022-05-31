import React from "react";
import {
  SectionWrapper,
  Typography,
  Container,
  ScaleResult,
  GridWrapper,
  BaseButton,
  CaloricCounter,
  FlexWrapper,
} from "components";
import scrollTo from "gatsby-plugin-smoothscroll";

export const ScaleSection: React.FC = () => (
  <SectionWrapper>
    <Container m={{ _: "s20", ltablet: "s16" }}>
      <Typography fontWeight="fw700" color="primary" textAlign="center">
        Based on quiz results, you will be:
      </Typography>
    </Container>
    <GridWrapper
      gridTemplateColumns={{
        _: "repeat(1,1fr)",
        ltablet: "repeat(2,1fr)",
      }}
      display={{ _: "block", ltablet: "flex" }}
      justifyContent="center"
      p={{ _: "s0", ltablet: "s40" }}
    >
      <ScaleResult />
      <CaloricCounter />
    </GridWrapper>
    <FlexWrapper justifyContent="center" margin="s0auto" mt="s30">
      <BaseButton onClick={() => scrollTo(`#Plans`)} width="12.5rem">
        Get the product!
      </BaseButton>
    </FlexWrapper>
  </SectionWrapper>
);
