import React, { useState, useEffect } from "react";
import {
  SectionWrapper,
  Container,
  Box,
  FlexWrapper,
  GridWrapper,
  ReviewCard,
  SectionHeader,
  Image,
} from "components";
import { StaticImage } from "gatsby-plugin-image";
import { REVIEW_DATA } from "constants/Constants";

//TODO: fix z index
export const ReviewContainer: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleImageClick = () => {
    setIndex(index === 3 ? index - 3 : index + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(
      () => setIndex(index === 3 ? index - 3 : index + 1),
      5000
    );

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <SectionWrapper id="Testimonials">
      <Container>
        <Box mx="auto" my="s50" textAlign="center" maxWidth="46.875rem">
          <FlexWrapper flexDirection="column">
            <Box pb={{ _: "s40", ltablet: "s100" }}>
              <SectionHeader
                center
                type="h3"
                header="What Customers Say?"
                paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
              />
            </Box>
          </FlexWrapper>
        </Box>
        <Box>
          <GridWrapper
            gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
            gap="5rem"
            m="s0s70"
          >
            <ReviewCard
              handleImageClick={handleImageClick}
              key={REVIEW_DATA[index].id}
              header={REVIEW_DATA[index].header}
              name={REVIEW_DATA[index].name}
              index={index}
              imageSrc={REVIEW_DATA[index].imageSrc}
              paragraph={REVIEW_DATA[index].paragraph}
              occupation={REVIEW_DATA[index].occupation}
            />
            <Box margin="auto" position="relative">
              <Image src="squad" />
              <Box
                position="absolute"
                top="0"
                left="19%"
                opacity="0.6"
                zIndex={-1}
              ></Box>
            </Box>
          </GridWrapper>
        </Box>
      </Container>
    </SectionWrapper>
  );
};
