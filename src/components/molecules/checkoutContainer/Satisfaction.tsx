import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";

export const Satisfaction: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100%"
      boxShadow={"1px 5px 16px black"}
      padding="20px"
    >
      <FlexWrapper flexDirection="column" alignItems="center" gap={"10px"}>
        <Typography type="h4" color="primary" textAlign="center">
          Satisfaction Rate from our clients!
        </Typography>
        <Box position={"relative"}>
          <Image src="green360" />
          <Box position="absolute" top="32%" left="30%">
            <Typography type="h2" color="primary" t>
              97%
            </Typography>
          </Box>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
