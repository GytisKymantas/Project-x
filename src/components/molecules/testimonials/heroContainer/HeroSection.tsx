import React from "react";
import { QuizStartButton } from "components/atoms/buttons/QuizStartButton";
import {
  Box,
  SectionWrapper,
  ContentWrapper,
  FlexWrapper,
  GridWrapper,
  Container,
} from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { StaticImage } from "gatsby-plugin-image";

export const HeroSection = () => {
  return (
    <SectionWrapper id="home">
      <ContentWrapper maxWidth="818px">
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
            <FlexWrapper flexDirection="column" maxWidth="418px">
              <SectionHeader
                type="h1"
                header="Always get adieus nature day course for common."
                paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
              />{" "}
              <FlexWrapper gap="10px" mt="s20">
                <QuizStartButton width="137px">Male</QuizStartButton>
                <QuizStartButton width="137px">Female</QuizStartButton>
              </FlexWrapper>
            </FlexWrapper>
          </Container>
          <Box position="relative">
            <StaticImage
              src="../../assets/images/skipper.png"
              alt="Man skipping on a rope"
              placeholder="tracedSVG"
              draggable="false"
            />
          </Box>
        </GridWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
