import React from "react";
import {
  Navigation,
  Footer,
  FlexWrapper,
  Box,
  SectionWrapper,
  Image,
  Typography,
  Container,
  ContentWrapper,
} from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

const success: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  console.log(purchaseData, "this is purchase");
  return (
    <>
      <Navigation />
      <SectionWrapper>
        <Box bg="taxi">
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

          <Box m="10rem">
            <FlexWrapper
              justify-content="center"
              borderBottom="1px solid primary"
            >
              <Typography color="primary">{purchaseData.month}</Typography>
              <Typography color="primary">{purchaseData.newValue}</Typography>
            </FlexWrapper>
            <FlexWrapper
              justify-content="flex-end"
              borderBottom="1px solid primary"
            >
              <Typography fontWeight="fw700" color="primary">
                Total
              </Typography>
              <Typography fontWeight="fw700" color="primary">
                {purchaseData.newValue}
              </Typography>
            </FlexWrapper>
          </Box>
        </Box>
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default success;
