import React from "react";
import {
  BaseButton,
  CaloricCounter,
  Container,
  FlexWrapper,
  GridWrapper,
  SectionWrapper,
  ScaleResult,
  Typography,
} from "components";
import scrollTo from "gatsby-plugin-smoothscroll";

export const ScaleSection: React.FC = () => (
  <SectionWrapper>
    <Container m={{ _: "s20", ltablet: "s16" }}>
      <Typography color="primary" fontWeight="fw700" textAlign="center">
        Based on quiz results, you will be:
      </Typography>
    </Container>
    <GridWrapper
      display={{ _: "block", ltablet: "flex" }}
      gridTemplateColumns={{
        _: "1fr",
        ltablet: "repeat(2,1fr)",
      }}
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
