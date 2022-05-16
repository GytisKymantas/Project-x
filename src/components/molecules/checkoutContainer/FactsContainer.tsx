import React from "react";
import { Box, GridWrapper } from "components";
import { CaloricCounter } from "./CaloricCounter";
import { BMI } from "./BMI";
import { Satisfaction } from "./Satisfaction";
import { Variations } from "./Variations";

const FactsContainer = () => {
  return (
    <Box>
      <GridWrapper
        gridTemplateColumns="repeat(2,1fr)"
        margin="0 20%"
        gap="20px"
      >
        <CaloricCounter calories={1500} />
        <BMI answer={21} />
        <Satisfaction />
        <Variations />
      </GridWrapper>
    </Box>
  );
};

export default FactsContainer;
