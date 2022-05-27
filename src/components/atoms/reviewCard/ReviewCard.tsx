import React from "react";
import { FlexWrapper, Box, Typography, Image, SectionHeader } from "components";
import { Star } from "assets/images";
import { theme } from "styles/theme";
import { RATING_STAR_ARRAY, BULLET_ARRAY } from "constants/Constants";

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
  <FlexWrapper
    flexDirection="column"
    gap="1.875rem"
    p="s30"
    boxShadow="default"
  >
    <SectionHeader center type="h4" header={header} paragraph={paragraph} />
    <Box mb="s25">
      <FlexWrapper>
        {RATING_STAR_ARRAY.map(({ id }) => (
          <Star key={id} />
        ))}
      </FlexWrapper>
    </Box>
    <FlexWrapper alignItems="center" gap="7.5rem" justifyContent="space-around">
      <FlexWrapper flexDirection="column" gap="0.3125rem">
        <Typography type="span" fontWeight="fw700" color="primary">
          {name}
        </Typography>
        <Typography type="span" fontSize="fs16" color="gray">
          {occupation}
        </Typography>
      </FlexWrapper>
      <Box borderRadius="br50" height="3.125rem" width="3.125rem">
        <Image style={{ borderRadius: `${theme.radii.br50}` }} src="jdepp" />
      </Box>
      <Box borderRadius="br50" height="3.125rem" width="3.125rem">
        <Image
          style={{
            borderRadius: `${theme.radii.br50}`,
            height: "55px",
            width: "55px",
          }}
          src="amber"
        />
      </Box>
    </FlexWrapper>
    <FlexWrapper gap="0.3125rem" justifyContent="center">
      {BULLET_ARRAY.map(({ id }) => (
        <Image key={id} src={index === id ? "bullet" : "bulletBlank"} />
      ))}
    </FlexWrapper>
  </FlexWrapper>
);
