import React from "react";
import { FlexWrapper, Box, Typography, Image, SectionHeader } from "components";
import { Star } from "assets/images";
import { RATING_STAR_ARRAY, BULLET_ARRAY } from "constants/Constants";
import { StaticImage } from "gatsby-plugin-image";

interface ReviewCardProps {
  header: string;
  paragraph: string;
  name: string;
  occupation: string;
  index: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  header,
  paragraph,
  name,
  occupation,
  index,
}) => (
  <FlexWrapper flexDirection="column" gap="1.875rem">
    <SectionHeader
      textAlign={{ ltablet: "center" }}
      type="h4"
      header={header}
      paragraph={paragraph}
    />
    <Box mb="s25">
      <FlexWrapper>
        {RATING_STAR_ARRAY.map(({ id }) => (
          <Star key={id} />
        ))}
      </FlexWrapper>
    </Box>
    <FlexWrapper alignItems="center" gap="7.5rem">
      <FlexWrapper flexDirection="column" gap="0.3125rem">
        <Typography type="span" fontWeight="fw700" color="primary">
          {name}
        </Typography>
        <Typography type="span" fontSize="fs16" color="gray">
          {occupation}
        </Typography>
      </FlexWrapper>
      <Box borderRadius="br50" height="3.125rem" width="3.125rem">
        {/* <StaticImage
          src="src/assets/images/jdepp.png"
          alt="foto"
          placeholder="tracedSVG"
          draggable="false"
          style={{
            maxWidth: "50px",
            maxHeight: "50px",
            margin: "0 auto",
          }}
        /> */}
      </Box>
    </FlexWrapper>
    <FlexWrapper gap="5px" justifyContent="center">
      {BULLET_ARRAY.map(({ id }) => (
        <Image key={id} src={index === id ? "bullet" : "bulletBlank"} />
      ))}
    </FlexWrapper>
  </FlexWrapper>
);
