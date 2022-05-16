import React, { useState, useEffect } from "react";
import {
  SectionWrapper,
  Container,
  Box,
  FlexWrapper,
  GridWrapper,
  ReviewCard,
} from "components";
import { StaticImage } from "gatsby-plugin-image";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { REVIEW_DATA } from "constants/Constants";
// import { Breakpoints } from "styles/theme";

export const Review: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setIndex(index === 2 ? index - 2 : index + 1),
      3000
    );

    return () => clearTimeout(timeout);
  }, [index]);

  return (
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
          <GridWrapper
            gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
            margin="0 70px"
          >
            <ReviewCard
              key={REVIEW_DATA[index].id}
              header={REVIEW_DATA[index].header}
              name={REVIEW_DATA[index].name}
              paragraph={REVIEW_DATA[index].paragraph}
              occupation={REVIEW_DATA[index].occupation}
            />
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
                  src="../../assets/images/yogabackground.png"
                  alt="yellow background"
                  placeholder="tracedSVG"
                  draggable="false"
                />{" "}
              </Box>
            </Box>
          </GridWrapper>
        </Box>
      </Container>
    </SectionWrapper>
  );
};
