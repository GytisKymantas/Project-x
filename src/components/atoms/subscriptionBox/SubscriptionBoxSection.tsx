import React from "react";
import { Box, SubscriptionBoxContainer } from "components";
import { SectionHeader } from "../sectionHeader/SectionHeader";

export const SubscriptionBoxSection: React.FC = () => (
  <Box>
    <SectionHeader
      type="h5"
      header="Choose from one of our customized subscription options!"
      paragraph="For a limited amount, these prices are not guaranteed to last!"
    />
    <SubscriptionBoxContainer />
  </Box>
);
