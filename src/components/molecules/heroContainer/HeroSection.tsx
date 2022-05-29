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
} from "components";
import { StaticImage } from "gatsby-plugin-image";

export const HeroSection: React.FC = () => (
  <SectionWrapper id="Home">
    <ContentWrapper maxWidth="51.125rem">
      <GridWrapper gridTemplateColumns="1fr 1fr">
        <Container>
          <Box>
            <StaticImage
              src="src/assets/images/skipper.png"
              alt="healthfitness"
              placeholder="tracedSVG"
              draggable="false"
            />
          </Box>
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
