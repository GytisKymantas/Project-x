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
import { mobile } from "styles/breakpoints";

export const HeroSection: React.FC = () => (
  <SectionWrapper id="Home">
    <ContentWrapper maxWidth="51.125rem">
      <GridWrapper gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}>
        <Container>
          <FlexWrapper justifyContent="center">
            <Image
              src="healthfitness"
              maxWidth={mobile ? "19.125rem" : "23.125rem"}
            />
          </FlexWrapper>
          <FlexWrapper
            flexDirection="column"
            maxWidth={{ _: "19.125rem", ltablet: "20.125rem" }}
            m="s0auto"
          >
            <SectionHeader
              header="Reach your Fitness goals today!"
              paragraph="Take a few minute to go through our quick quiz to determine which personal Fitness plan for You!"
              type="h1"
            />
            <GenderButtons />
          </FlexWrapper>
        </Container>
        <Box display={{ _: "none", ltablet: "block" }} position="relative">
          <Image src="skipper" />
        </Box>
      </GridWrapper>
    </ContentWrapper>
  </SectionWrapper>
);
