import React from "react";
import { SectionWrapper, SectionHeader, Box } from "components";

export const CheckoutHero: React.FC = () => (
  <SectionWrapper>
    <Box width="80%" my="s30" mx="auto">
      <SectionHeader
        center
        type="h4"
        header="See how we can improve your daily life!"
        paragraph="Bond with your body and support its development with creative, fun and easy activities."
      />
    </Box>
  </SectionWrapper>
);
