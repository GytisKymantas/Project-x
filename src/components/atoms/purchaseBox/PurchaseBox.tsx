import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

export const PurchaseBox: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  return (
    <Box
      bg="orangelight"
      m="1rem auto"
      border="orangethick"
      p="s32"
      boxShadow=""
      maxWidth="500px"
    >
      <FlexWrapper justifyContent="space-between" p="s16" borderBottom="answer">
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
      <FlexWrapper
        justifyContent="center"
        p="s16"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Typography fontWeight="fw700" color="primary">
          Total
        </Typography>
        <Typography fontWeight="fw700" color="primary">
          {purchaseData?.newValue}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};
