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

export const HeroSection = () => {
  return (
    <SectionWrapper>
      <ContentWrapper maxWidth="818px">
        <GridWrapper gridTemplateColumns="1fr 1fr">
          <Container>
            <Box>
              <Image src="healthfitness" />
            </Box>
            <FlexWrapper flexDirection="column" maxWidth="418px">
              <Typography type="h1" fontSize="fs24" color="primary">
                Always get adieus nature day course for common.{" "}
              </Typography>
              <Typography color="primary">
                Why sir end believe uncivil respect. Always get adieus nature
                day course for common. My little garret repair to desire he
                esteem.
              </Typography>
              <FlexWrapper>
                <QuizStartButton>Male</QuizStartButton>
                <QuizStartButton>Female</QuizStartButton>
              </FlexWrapper>
            </FlexWrapper>
          </Container>
          <Box position="relative">
            {/* <Image src="yellowtombstone" /> */}
            <Image src="skipper" />
          </Box>
        </GridWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
