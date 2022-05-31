import React from "react";
import { SectionWrapper, Box } from "components";
import { CheckOut } from "./CheckOut";

export const CheckOutContainer: React.FC = () => (
  <SectionWrapper>
    <Box width="80%" m="auto">
      <CheckOut />
    </Box>
  </SectionWrapper>
);
