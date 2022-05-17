import React from "react";
import { Box } from "components";
import { SectionHeader } from "../sectionHeader/SectionHeader";

import { SubscriptionBoxContainer } from "components/atoms/subscriptionBox/SubscriptionBoxContainer";

export const SubscriptionBoxSection: React.FC = () => {
  return (
    <Box>
      <SectionHeader
        type="h5"
        header="Choose from one of our customized subscription options!"
        paragraph="For a limited amount, these prices are not guaranteed to last!"
      />
      <SubscriptionBoxContainer />
    </Box>
  );
};
