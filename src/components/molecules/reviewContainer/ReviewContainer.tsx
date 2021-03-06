import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  FlexWrapper,
  GridWrapper,
  Image,
  ReviewCard,
  SectionHeader,
  SectionWrapper,
} from "components";
import { REVIEW_DATA } from "constants/Constants";

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
    <SectionWrapper>
      <Container>
        <Box maxWidth="46.875rem" m="s50sauto" textAlign="center">
          <FlexWrapper flexDirection="column">
            <Box pb={{ _: "s40", ltablet: "s100" }} id="Testimonials">
              <SectionHeader
                center
                header="What Customers Say?"
                paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
                type="h3"
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
              header={REVIEW_DATA[index].header}
              index={index}
              imageSrc={REVIEW_DATA[index].imageSrc}
              key={REVIEW_DATA[index].id}
              name={REVIEW_DATA[index].name}
              occupation={REVIEW_DATA[index].occupation}
              paragraph={REVIEW_DATA[index].paragraph}
            />
            <Box margin="auto" position="relative">
              <Image src="squad" />
            </Box>
          </GridWrapper>
        </Box>
      </Container>
    </SectionWrapper>
  );
};
