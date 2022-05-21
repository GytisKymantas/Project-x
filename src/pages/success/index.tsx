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

const success: React.FC = () => (
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

        <Box>
          <FlexWrapper borderBottom="1px solid lightwhite">
            <Typography color="primary">Title</Typography>
            <Typography color="primary">Price</Typography>
          </FlexWrapper>
          <FlexWrapper borderBottom="1px solid lightwhite">
            <Typography fontWeight="fw700" color="primary">
              Total
            </Typography>
            <Typography fontWeight="fw700" color="primary">
              Price
            </Typography>
          </FlexWrapper>
        </Box>
      </Box>
    </SectionWrapper>
    <Footer />
  </>
);

export default success;
