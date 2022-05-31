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
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";

export const OrderSummaryContainer: React.FC = () => {
  const emailData = useSelector(selectUserData);
  const email = emailData.email;
  console.log(email, "this is email");
  return (
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
            <Box p="s16">
              <Typography fontWeight="fw700" color="primary" textAlign="center">
                {email}
              </Typography>
              <Typography color="primary" textAlign="center">
                (Check your spam inbox)
              </Typography>
            </Box>
          </Box>
          <Box position="absolute" top="80%" zIndex={-4} opacity="0.2">
            <Image src="party" />
          </Box>
        </FlexWrapper>
      </Box>
    </SectionWrapper>
  );
};
