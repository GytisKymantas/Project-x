import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";

export const Variations: React.FC = () => {
  return (
    <Box
      bg="white"
      width="342px"
      height="100%"
      boxShadow={"1px 5px 16px black"}
      p="20px"
    >
      <FlexWrapper flexDirection="column" alignItems="center" gap={"10px"}>
        <Typography type="h2" color="primary">
          100+
        </Typography>
        <Box
          border="1px solid black"
          bg="white"
          boxShadow={"1px 1px 5px black"}
          p="5px"
        >
          <Typography type="h4" color="primary" textAlign="center">
            Unique Program and Meal Plan Variations, specifically adjusted for
            You!
          </Typography>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
