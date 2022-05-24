import React from "react";
import { SectionWrapper, FlexWrapper, Box, Typography } from "components";
import { Instagram, Twitter, Facebook } from "assets/images";
import { theme } from "styles/theme";

export const Footer: React.FC = () => (
  <>
    <Box as="footer" borderTop="1px solid primary">
      <Box padding="3rem 0">
        <FlexWrapper justifyContent="space-around">
          <FlexWrapper flexDirection="column">
            <Typography type="h4" color="primary">
              Fit on-time
            </Typography>
            <Typography color="gray">
              Lorem ipsum eered calling prudent her. And residence for met the
              estimable disposing. Mean if he they been no hold mr.
            </Typography>
          </FlexWrapper>
          <FlexWrapper gap="20px">
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
        justifyContent="center"
      >
        <Typography color="white">
          {new Date().getFullYear()} © All rights reserved,{" "}
          <span style={{ color: "orange" }}>Gytis Kymantas</span>, Vilnius,
          Lithuania
        </Typography>
      </FlexWrapper>
    </Box>
  </>
);
