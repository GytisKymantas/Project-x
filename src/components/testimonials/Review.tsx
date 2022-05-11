import React from "react";
import {
  SectionWrapper,
  Container,
  Box,
  FlexWrapper,
  GridWrapper,
  ReviewCard,
} from "components";
import { StaticImage } from "gatsby-plugin-image";
import { SectionHeader } from "components/sectionHeader/SectionHeader";

export const Review: React.FC = () => (
  <SectionWrapper id="testimonials">
    <Container>
      <Box mx="auto" my="s50" textAlign="center" maxWidth="750px">
        <FlexWrapper flexDirection="column">
          <SectionHeader
            type="h3"
            header="What Customes Say"
            paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
          />
        </FlexWrapper>
      </Box>
      <Box>
        <GridWrapper gridTemplateColumns="repeat(2,1fr)" margin="0 70px">
          <ReviewCard />
          <Box margin="s0auto" position="relative">
            <StaticImage
              src="../../assets/images/yoga.png"
              alt="Woman doing yoga"
              placeholder="tracedSVG"
              draggable="false"
            />{" "}
            <Box
              position="absolute"
              top="0"
              left="19%"
              opacity="0.6"
              zIndex={-1}
            >
              <StaticImage
                src="../../assets/images/yellowtombstone.png"
                alt="yellow background"
                placeholder="tracedSVG"
                draggable="false"
                // style={{
                //   maxWidth: "500px",
                //   margin: "0 auto",
                // }}
              />{" "}
            </Box>
          </Box>
        </GridWrapper>
      </Box>
    </Container>
  </SectionWrapper>
);
