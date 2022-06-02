import React from "react";
import {
  Box,
  SubscriptionBoxContainer,
  SectionHeader,
  SectionWrapper,
} from "components";

export const SubscriptionBoxSection: React.FC = () => (
  <SectionWrapper>
    <Box id="Plans" m="auto" pt="s100" width={{ _: "92%", ltablet: "100%" }}>
      <SectionHeader
        center
        header="Choose from one of our customized subscription options!"
        paragraph="For a limited amount, these prices are not guaranteed to last!"
        type="h5"
      />
      <SubscriptionBoxContainer />
    </Box>
  </SectionWrapper>
);
