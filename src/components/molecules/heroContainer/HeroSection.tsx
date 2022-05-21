import React from "react";
import {
  Box,
  SectionWrapper,
  ContentWrapper,
  FlexWrapper,
  GridWrapper,
  Container,
  QuizStartButton,
} from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { StaticImage } from "gatsby-plugin-image";

export const HeroSection: React.FC = () => (
  <SectionWrapper id="Home">
    <ContentWrapper maxWidth="51.125rem">
      <GridWrapper gridTemplateColumns="1fr 1fr">
        <Container>
          <Box>
            <StaticImage
              src="../../assets/images/healthfitness.png"
              alt="health and fitness logo"
              placeholder="tracedSVG"
              draggable="false"
            />
          </Box>
          <FlexWrapper flexDirection="column" maxWidth="26.125rem">
            <SectionHeader
              type="h1"
              header="Always get adieus nature day course for common."
              paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
            />{" "}
            <FlexWrapper gap="0.625rem" mt="s20">
              <QuizStartButton width="8.5625rem">Male</QuizStartButton>
              <QuizStartButton width="8.5625rem">Female</QuizStartButton>
            </FlexWrapper>
          </FlexWrapper>
        </Container>
        <Box position="relative">
          <StaticImage
            src="../../assets/images/green360.png"
            alt="Man skipping on a rope"
            placeholder="tracedSVG"
            draggable="false"
          />
        </Box>
      </GridWrapper>
    </ContentWrapper>
  </SectionWrapper>
);
