import React from "react";
import {
  Navigation,
  Footer,
  FlexWrapper,
  Box,
  SectionWrapper,
  Image,
  Typography,
  SectionHeader,
  PurchaseBox,
} from "components";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

const success: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  console.log(purchaseData, "this is purchase");
  return (
    <>
      <Navigation />
      <SectionWrapper>
        <Box>
          <SectionHeader
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
      <Footer />
    </>
  );
};

export default success;
