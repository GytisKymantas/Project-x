import React from "react";
import { FlexWrapper, Box, Typography } from "components";
import { Instagram, Twitter, Facebook } from "assets/images";
import { Breakpoints } from "styles/theme";
//TODO: fix the tyypography and socials
export const Footer: React.FC = () => (
  <Box as="footer" borderTop="scale" mt="s100">
    <Box p="s50s0">
      <FlexWrapper justifyContent="space-around">
        <FlexWrapper flexDirection="column" gap="20px">
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
          flexDirection={{ _: "row" }}
          justifyContent={{ _: "center" }}
        >
          <Box>
            <Instagram />
          </Box>
          <Box>
            <Twitter />
          </Box>
          <Box>
            <Facebook />
          </Box>
        </FlexWrapper>
      </FlexWrapper>
    </Box>
    <FlexWrapper
      height="10vh"
      bg="primary"
      alignItems="center"
      // fontSize={{ _: "fs14" }}
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
