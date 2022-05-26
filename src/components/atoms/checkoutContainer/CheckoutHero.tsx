import React from "react";
import { SectionWrapper, SectionHeader, Typography, Box } from "components";

export const CheckoutHero: React.FC = () => (
  <SectionWrapper>
    <Box>
      <SectionHeader
        center
        type="h4"
        header="See how Fit on-time can improve your daily life"
        paragraph="Bond with your baby and support his or her development with creative, fun and easy activities."
      />
      <Box mt="s50">
        <Typography type="h5" color="primary" textAlign="center">
          Your summary:
        </Typography>
      </Box>
    </Box>
  </SectionWrapper>
);
