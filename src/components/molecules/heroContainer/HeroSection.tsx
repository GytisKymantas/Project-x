import React from "react";
import {
  Box,
  SectionWrapper,
  ContentWrapper,
  FlexWrapper,
  GridWrapper,
  Container,
  SectionHeader,
  GenderButtons,
  Image,
} from "components";
import { StaticImage } from "gatsby-plugin-image";

export const HeroSection: React.FC = () => (
  <SectionWrapper id="Home">
    <ContentWrapper maxWidth="51.125rem">
      <GridWrapper gridTemplateColumns="1fr 1fr">
        <Container>
          {/* <Box> */}
          <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />

          {/* </Box> */}
          <FlexWrapper flexDirection="column" maxWidth="26.125rem">
            <SectionHeader
              type="h1"
              header="Reach your Fitness goals today!"
              paragraph="Take a few minute to go through our quick quiz to determine which personal Fitness plan for You!."
            />
            <GenderButtons />
          </FlexWrapper>
        </Container>
        <Box position="relative">
          <StaticImage
            src="src/assets/images/dbgirl.png"
            alt="skipping"
            placeholder="tracedSVG"
            draggable="false"
          />
        </Box>
      </GridWrapper>
    </ContentWrapper>
  </SectionWrapper>
);
