import React from "react";
import { Box, GridWrapper, BMI } from "components";

const FactsContainer: React.FC = () => (
  <Box>
    <GridWrapper gridTemplateColumns="repeat(2,1fr)" m="s0auto" gap="1.25rem">
      <BMI />
    </GridWrapper>
  </Box>
);

export default FactsContainer;
