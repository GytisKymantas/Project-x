import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectPurchaseData } from "state/selectors";

export const PurchaseBox: React.FC = () => {
  const purchaseData = useSelector(selectPurchaseData);
  return (
    <Box
      bg="orangelight"
      border="orangethick"
      maxWidth="31.25rem"
      mx="s16"
      my="auto"
      p="s32"
    >
      <FlexWrapper borderBottom="answer" justifyContent="space-between" p="s16">
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
        alignItems="flex-end"
        flexDirection="column"
        justifyContent="center"
        p="s16"
      >
        <Typography color="primary" fontWeight="fw700">
          Total
        </Typography>
        <Typography color="primary" fontWeight="fw700">
          {purchaseData?.newValue}
        </Typography>
      </FlexWrapper>
    </Box>
  );
};
