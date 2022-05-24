import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";

export const Variations: React.FC = () => (
  <Box bg="white" width="21.375rem" height="100%" boxShadow="default" p="s20">
    <FlexWrapper flexDirection="column" alignItems="center" gap={"0.625rem"}>
      <Typography type="h2" color="primary">
        100+
      </Typography>
      <Box border="default" bg="white" boxShadow="default" p="s5">
        <Typography type="h4" color="primary" textAlign="center">
          Unique Program and Meal Plan Variations, specifically adjusted for
          You!
        </Typography>
      </Box>
    </FlexWrapper>
  </Box>
);
