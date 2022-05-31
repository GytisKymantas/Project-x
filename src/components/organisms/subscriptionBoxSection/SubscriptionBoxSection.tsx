import React from "react";
import {
  Box,
  SubscriptionBoxContainer,
  SectionHeader,
  SectionWrapper,
} from "components";

export const SubscriptionBoxSection: React.FC = () => (
  <SectionWrapper>
    <Box pt="s100" m="auto" width={{ _: "92%", ltablet: "100%" }}>
      <SectionHeader
        type="h5"
        center
        header="Choose from one of our customized subscription options!"
        paragraph="For a limited amount, these prices are not guaranteed to last!"
      />
      <SubscriptionBoxContainer />
    </Box>
  </SectionWrapper>
);
