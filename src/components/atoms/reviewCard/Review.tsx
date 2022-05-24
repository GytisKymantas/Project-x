import React, { useState, useEffect } from "react";
import {
  SectionWrapper,
  Container,
  Box,
  FlexWrapper,
  GridWrapper,
  ReviewCard,
  SectionHeader,
} from "components";
// import { StaticImage } from "gatsby-plugin-image";
import { REVIEW_DATA } from "constants/Constants";
//TODO: fix z index
export const Review: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => setIndex(index === 2 ? index - 2 : index + 1),
      45000
    );

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <SectionWrapper id="Testimonials">
      <Container>
        <Box mx="auto" my="s50" textAlign="center" maxWidth="750px">
          <FlexWrapper flexDirection="column">
            <Box pb="s100">
              <SectionHeader
                type="h3"
                header="What Customes Say"
                paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
              />
            </Box>
          </FlexWrapper>
        </Box>
        <Box>
          <GridWrapper
            gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
            ma="s0s70"
          >
            <ReviewCard
              key={REVIEW_DATA[index].id}
              header={REVIEW_DATA[index].header}
              name={REVIEW_DATA[index].name}
              index={index}
              paragraph={REVIEW_DATA[index].paragraph}
              occupation={REVIEW_DATA[index].occupation}
            />
            <Box margin="s0auto" position="relative">
              {/* <StaticImage
                src="../../assets/images/yoga.png"
                alt="foto"
                placeholder="tracedSVG"
                draggable="false"
                style={{
                  maxWidth: "500px",
                  margin: "0 auto",
                }} */}
              <Box
                position="absolute"
                top="0"
                left="19%"
                opacity="0.6"
                zIndex={-1}
              >
                {/* <StaticImage
                  src="../../assets/images/yogabackground.png"
                  alt="foto"
                  placeholder="tracedSVG"
                  draggable="false"
                  style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                /> */}
              </Box>
            </Box>
          </GridWrapper>
        </Box>
      </Container>
    </SectionWrapper>
  );
};
