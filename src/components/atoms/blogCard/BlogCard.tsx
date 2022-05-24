import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { StaticImage } from "gatsby-plugin-image";

export const BlogCard: React.FC = () => {
  return (
    <Box
      m="200px"
      height="590px"
      maxWidth="536px"
      bg="gray"
      p="0 2rem"
      position="relative"
    >
      <FlexWrapper flexDirection="column" justifyContent="">
        <Box
          position="absolute"
          height="215px"
          bg="orange"
          top="-10%"
          left="10%"
          width="430px"
        >
          {" "}
        </Box>
        <FlexWrapper flexDirection="column" gap="40px">
          <Typography fontWeight="fw700" color="red">
            NEW!
          </Typography>
          <Typography color="primary">
            Supported me sweetness behaviour shameless excellent so arranging.
            Typography
          </Typography>
        </FlexWrapper>
        <Box mt="45px" bg="taxi">
          <Typography color="primary">
            Offending belonging promotion provision an be oh consulted ourselves
            it. Blessing welcomed ladyship she met humoured sir breeding her.
            Typography
          </Typography>
        </Box>
      </FlexWrapper>
    </Box>
  );
};
