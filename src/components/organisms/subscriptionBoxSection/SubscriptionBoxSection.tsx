import React from "react";
import { Box, SubscriptionBoxContainer, SectionHeader } from "components";

export const SubscriptionBoxSection: React.FC = () => (
  <Box pt="s100" width={{ _: "92%", ltablet: "100%" }}>
    <SectionHeader
      type="h5"
      center
      header="Choose from one of our customized subscription options!"
      paragraph="For a limited amount, these prices are not guaranteed to last!"
    />
    <SubscriptionBoxContainer />
  </Box>
);
