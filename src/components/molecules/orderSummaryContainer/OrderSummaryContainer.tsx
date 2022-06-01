import React from "react";
import {
  Box,
  FlexWrapper,
  Image,
  PurchaseBox,
  SectionHeader,
  SectionWrapper,
  Typography,
} from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";

export const OrderSummaryContainer: React.FC = () => {
  const emailData = useSelector(selectUserData);
  const email = emailData.email;
  return (
    <SectionWrapper>
      <Box>
        <SectionHeader
          center
          header="Thank You for Purchasing!"
          paragraph="We hope you will enjoy your new journey!"
          type="h2"
        />
        <Box>
          <Box mt="s50">
            <Typography color="primary" fontWeight="fw700" textAlign="center">
              Order Summary:
            </Typography>
          </Box>
        </Box>
        <PurchaseBox />
        <FlexWrapper justifyContent="center">
          <Box>
            <SectionHeader
              center
              header="How to start the Anxietless program?"
              paragraph="We have just sent out a letter to your email address:"
              type="h6"
            />
            <Box p="s16">
              <Typography color="primary" fontWeight="fw700" textAlign="center">
                {email}
              </Typography>
              <Typography color="primary" textAlign="center">
                (Check your spam inbox)
              </Typography>
            </Box>
          </Box>
          <Box opacity="0.2" position="absolute" top="80%" zIndex="sub">
            <Image src="party" />
          </Box>
        </FlexWrapper>
      </Box>
    </SectionWrapper>
  );
};
