import React from "react";
import { Box, SubscriptionBoxContainer, SectionHeader } from "components";
//TODO:fix
export const SubscriptionBoxSection: React.FC = () => (
  <Box pt="6.25rem" width={{ _: "92%", ltbalet: "100%" }}>
    <SectionHeader
      type="h5"
      center
      header="Choose from one of our customized subscription options!"
      paragraph="For a limited amount, these prices are not guaranteed to last!"
    />
    <SubscriptionBoxContainer />
  </Box>
);
