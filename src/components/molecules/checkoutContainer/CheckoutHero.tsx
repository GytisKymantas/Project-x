import React from "react";
import { SectionWrapper, Typography, FlexWrapper, Box } from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";

export const CheckoutHero: React.FC = () => {
  return (
    <SectionWrapper>
      <Box>
        <SectionHeader
          type="h4"
          header="See how Fit on-time can improve your daily life"
          paragraph="Bond with your baby and support his or her development with creative, fun and easy activities."
        />
        <Box mt="50px">
          <Typography type="h5" color="primary" textAlign="center">
            Your summary
          </Typography>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
