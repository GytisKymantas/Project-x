import React from "react";
import { FlexWrapper, Box, Typography, Image } from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
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
}) => {
  return (
    <FlexWrapper flexDirection="column" gap="30px">
      <SectionHeader type="h4" header={header} paragraph={paragraph} />
      <Box mb="s25">
        <FlexWrapper>
          {RATING_STAR_ARRAY.map(({ id }) => (
            <Star key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <FlexWrapper alignItems="center" gap="120px">
        <FlexWrapper flexDirection="column" gap="5px">
          <Typography type="span" fontWeight="fw700" color="primary">
            {name}
          </Typography>
          <Typography type="span" fontSize="fs16" color="gray">
            {occupation}
          </Typography>
        </FlexWrapper>
        <Box borderRadius="br50" height="50px" width="50px">
          <StaticImage
            src="src/assets/images/jdepp.png"
            alt="foto"
            placeholder="tracedSVG"
            draggable="false"
            style={{
              maxWidth: "50px",
              maxHeight: "50px",
              margin: "0 auto",
            }}
          />
        </Box>
      </FlexWrapper>
      <FlexWrapper gap="5px" justifyContent="center">
        {BULLET_ARRAY.map(({ id }) => (
          <Image key={id} src={index === id ? "bullet" : "bulletBlank"} />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
};
