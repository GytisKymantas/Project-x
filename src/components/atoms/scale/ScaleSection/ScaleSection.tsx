import React from "react";
import {
  SectionWrapper,
  Typography,
  Container,
  ContentWrapper,
} from "components";
import { BMI } from "components/molecules/checkoutContainer/BMI";
import { ScaleResult } from "../ScaleResult";
import { FlexWrapper } from "components/atoms/wrappers/FlexWrapper";
import { CaloricCounter } from "components/molecules/checkoutContainer/CaloricCounter";

const ScaleSection = () => {
  return (
    <SectionWrapper>
      <Container mb="50px">
        <Typography fontWeight="fw700" color="primary">
          Based on quiz results, you will be
        </Typography>
      </Container>
      <Container>
        <FlexWrapper gap="20px" justifyContent="center">
          <ScaleResult />
          {/* <BMI /> */}
          <CaloricCounter />
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ScaleSection;
