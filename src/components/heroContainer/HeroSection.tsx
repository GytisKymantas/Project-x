import React from "react";
import { QuizStartButton } from "components/buttons/QuizStartButton";
import {
  Box,
  Image,
  SectionWrapper,
  ContentWrapper,
  Typography,
  FlexWrapper,
  GridWrapper,
  Container,
} from "components";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { StaticImage } from "gatsby-plugin-image";

export const HeroSection = () => {
  return (
    <SectionWrapper id="home">
      <ContentWrapper maxWidth="818px">
        <GridWrapper gridTemplateColumns="1fr 1fr">
          <Container>
            <Box>
              {/* <Image src="healthfitness" /> */}
              <StaticImage
                src="../../assets/images/healthfitness.png"
                alt="health and fitness logo"
                placeholder="tracedSVG"
                draggable="false"
                // style={{
                //   maxWidth: "500px",
                //   margin: "0 auto",
                // }}
              />
            </Box>
            <FlexWrapper flexDirection="column" maxWidth="418px">
              <SectionHeader
                type="h1"
                header="Always get adieus nature day course for common."
                paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
              />{" "}
              <FlexWrapper gap="10px" mt="s20">
                <QuizStartButton>Male</QuizStartButton>
                <QuizStartButton>Female</QuizStartButton>
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
