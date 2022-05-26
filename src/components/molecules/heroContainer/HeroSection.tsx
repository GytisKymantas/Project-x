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
              src="../../assets/images/healthfitness.png"
              alt="foto"
              placeholder="tracedSVG"
              draggable="false"
              style={{
                maxWidth: "500px",
                margin: "0 auto",
              }}
            />{" "}
          </Box>
          <FlexWrapper flexDirection="column" maxWidth="26.125rem">
            <SectionHeader
              type="h1"
              header="Always get adieus nature day course for common."
              paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
            />
            <GenderButtons />
          </FlexWrapper>
        </Container>
        <Box position="relative">
          <StaticImage
            src="src/assets/images/skipper.png"
            alt="skipping"
            placeholder="tracedSVG"
            draggable="false"
          />
        </Box>
      </GridWrapper>
    </ContentWrapper>
  </SectionWrapper>
);
