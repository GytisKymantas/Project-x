import React from "react";
import {
  Box,
  FlexWrapper,
  SectionHeader,
  SectionWrapper,
  Image,
  PurchaseBox,
  Typography,
} from "components";

export const OrderSummaryContainer: React.FC = () => (
  <SectionWrapper>
    <Box>
      <SectionHeader
        center
        type="h2"
        header="Thank You for Purchasing!"
        paragraph="We hope you will enjoy your new journey!"
      />
      <Box>
        <Box mt="s50">
          <Typography textAlign="center" color="primary" fontWeight="fw700">
            Order Summary:
          </Typography>
        </Box>
      </Box>
      <PurchaseBox />
      <FlexWrapper justifyContent="center">
        <Box>
          <SectionHeader
            center
            type="h6"
            header="How to start the Anxietless program?"
            paragraph="We have just sent out a letter to your email address:"
          />
        </Box>
        <Box position="absolute" top="80%" zIndex={-4} opacity="0.2">
          <Image src="party" />
        </Box>
      </FlexWrapper>
    </Box>
  </SectionWrapper>
);
