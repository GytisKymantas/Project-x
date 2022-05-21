import React from "react";
import { Box, GridWrapper } from "components";
import { CaloricCounter } from "../../atoms/caloricCounter/CaloricCounter";
import { BMI } from "../../atoms/BMI/BMI";
import { Satisfaction } from "../../atoms/checkoutContainer/Satisfaction";
import { Variations } from "../../atoms/checkoutContainer/Variations";

const FactsContainer: React.FC = () => {
  return (
    <Box>
      <GridWrapper
        gridTemplateColumns="repeat(2,1fr)"
        margin="0 20%"
        gap="20px"
      >
        <BMI />
      </GridWrapper>
    </Box>
  );
};

export default FactsContainer;
