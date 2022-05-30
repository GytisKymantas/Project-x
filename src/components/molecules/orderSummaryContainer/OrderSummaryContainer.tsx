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
        header="Thank You for Purchasing !"
        paragraph="We hope you will enjoy your new journey!"
      />
      <FlexWrapper justifyContent="center">
        <Image src="party" />
      </FlexWrapper>
    </Box>
    <Box>
      <Box>
        <Typography textAlign="center" color="primary" fontWeight="fw700">
          Order Summary:
        </Typography>
      </Box>
      <PurchaseBox />
    </Box>
  </SectionWrapper>
);
