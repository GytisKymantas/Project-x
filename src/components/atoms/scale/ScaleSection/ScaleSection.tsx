import React from "react";
import {
  SectionWrapper,
  Typography,
  Container,
  ScaleResult,
  FlexWrapper,
} from "components";
import { CaloricCounter } from "components/molecules/checkoutContainer/CaloricCounter";

const ScaleSection: React.FC = () => {
  return (
    <SectionWrapper>
      <Container mb="s50">
        <Typography fontWeight="fw700" color="primary">
          Based on quiz results, you will be
        </Typography>
      </Container>
      <Container>
        <FlexWrapper gap="1.25rem" justifyContent="center">
          <ScaleResult />
          <CaloricCounter />
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ScaleSection;
