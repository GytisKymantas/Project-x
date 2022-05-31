import React from "react";
import { GridWrapper, BMI, SectionWrapper } from "components";

export const BMIcontainer: React.FC = () => (
  <SectionWrapper>
    <GridWrapper gridTemplateColumns="repeat(2,1fr)" m="s0auto" gap="1.25rem">
      <BMI />
    </GridWrapper>
  </SectionWrapper>
);
