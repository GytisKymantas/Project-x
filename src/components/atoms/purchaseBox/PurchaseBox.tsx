import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

export const PurchaseBox: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  return (
    <Box bg="lightwhite" m="s80">
      <FlexWrapper justifyContent="space-around">
        <Box>
          <Typography color="primary">
            Purchased title: {purchaseData?.month}
          </Typography>
        </Box>
        <Box>
          <Typography color="primary">
            Price: {purchaseData?.newValue}
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper justifyContent="center" borderBottom="default" p="s10">
        <Typography fontWeight="fw700" color="primary">
          Total:
        </Typography>
        <Typography fontWeight="fw700" color="primary">
          {purchaseData?.newValue}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};
