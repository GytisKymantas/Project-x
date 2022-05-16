import React from "react";
import { SectionWrapper, FlexWrapper, Box, Typography } from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { Instagram, Twitter, Facebook } from "assets/images";

export const Footer: React.FC = () => (
  <>
    <SectionWrapper as="footer" border-top="1px solid rgb(252 197 197 / 29%)">
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
        {/* <SectionHeader
          type="h4"
          header="fit on-time"
          paragraph="Lorem ipsum  eered calling prudent her. And residence for met the estimable disposing. Mean if he they been no hold mr. Is at m"
        /> */}
        <FlexWrapper gap="20px">
          <Instagram />
          <Twitter />
          <Facebook />
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
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
  </>
);
