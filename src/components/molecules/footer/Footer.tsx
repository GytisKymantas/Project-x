import React from "react";
import { FlexWrapper, Box, Typography } from "components";
import { mobile } from "styles/breakpoints";
import { SOCIALS_ARRAY } from "constants/Constants";

export const Footer: React.FC = () => (
  <Box id="Check" as="footer" borderTop="scale" mt="s80">
    <Box p="s35s0">
      <FlexWrapper
        justifyContent="space-around"
        flexDirection={mobile ? "column" : "row"}
        pt="s20"
      >
        <FlexWrapper
          textAlign={{ _: "center", ltablet: "initial" }}
          flexDirection="column"
          gap="1.25rem"
          pb="s20"
        >
          <Typography type="h4" color="primary">
            Fit on-time
          </Typography>
          <Typography color="gray">
            Lorem ipsum eered calling prudent her. And residence for met the
            estimable disposing. Mean if he they been no hold mr.
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          gap="1.25rem"
          flexDirection={mobile ? "row" : "column"}
          justifyContent={mobile ? "center" : "flex-end"}
          pb={{ _: "s20", ltablet: "s0" }}
        >
          {SOCIALS_ARRAY.map(({ image, id }) => (
            <Box key={id}>{image}</Box>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </Box>
    <FlexWrapper
      height="10vh"
      bg="primary"
      alignItems="center"
      justifyContent="center"
    >
      <Typography color="white">
        {new Date().getFullYear()} © All rights reserved,{" "}
        <span style={{ color: "orange" }}>Gytis Kymantas</span>, Vilnius,
        Lithuania
      </Typography>
    </FlexWrapper>
  </Box>
);
