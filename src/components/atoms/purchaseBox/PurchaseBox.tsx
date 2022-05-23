import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

export const PurchaseBox: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  console.log(purchaseData, "this is purchase");

  return (
    <Box bg="lightwhite" m="5rem">
      <FlexWrapper justifyContent="space-around">
        <Box>
          <Typography color="primary">
            Purchased title: {purchaseData.month}
          </Typography>
        </Box>
        <Box>
          <Typography color="primary">
            Price: {purchaseData.newValue}
          </Typography>
        </Box>
      </FlexWrapper>
      <FlexWrapper justify-content="flex-end" borderBottom="1px solid primary">
        <Typography fontWeight="fw700" color="primary">
          Total
        </Typography>
        <Typography fontWeight="fw700" color="primary">
          {purchaseData.newValue}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};
