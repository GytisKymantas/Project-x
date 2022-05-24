import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";

//TODO: fix this
export const Satisfaction: React.FC = () => (
  <Box width="100%" height="100%" boxShadow="s20" p="s20">
    <FlexWrapper flexDirection="column" alignItems="center" gap={"0.625rem"}>
      <Typography type="h4" color="primary" textAlign="center">
        Satisfaction Rate from our clients!
      </Typography>
      <Box position="relative">
        <Image src="green360" />
        <Box position="absolute" top="32%" left="30%">
          <Typography type="h2" color="primary">
            97%
          </Typography>
        </Box>
      </Box>
    </FlexWrapper>
  </Box>
);
