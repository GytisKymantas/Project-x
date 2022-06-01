import React from "react";
import { SectionWrapper, SectionHeader, Typography, Box } from "components";

export const CheckoutHero: React.FC = () => (
  <SectionWrapper>
    <Box width="80%" my="s30" mx="auto">
      <SectionHeader
        center
        type="h4"
        header="See how Fit on-time can improve your daily life"
        paragraph="Bond with your baby and support his or her development with creative, fun and easy activities."
      />
    </Box>
  </SectionWrapper>
);
