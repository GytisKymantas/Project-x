import React from "react";
import { FlexWrapper, Box, Typography, Image, SectionHeader } from "components";
import { Star, Verified } from "assets/images";
import { RATING_STAR_ARRAY, BULLET_ARRAY } from "constants/Constants";
import styled from "styled-components/macro";

interface ReviewCardProps {
  handleImageClick?: () => void;
  header: string;
  paragraph: string;
  name: string;
  occupation: string;
  index: number;
  imageSrc: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  header,
  paragraph,
  name,
  occupation,
  index,
  handleImageClick,
  imageSrc,
}) => (
  <ReviewCardContainer
    flexDirection="column"
    gap="3.875rem"
    p="s30"
    boxShadow="default"
    height="25rem"
    onClick={handleImageClick}
    borderRadius="br20"
  >
    {" "}
    <Box maxHeight="6.25rem">
      <SectionHeader center type="h4" header={header} paragraph={paragraph} />
    </Box>
    <Box mb="s25">
      <FlexWrapper alignItems="center" justifyContent="center">
        {RATING_STAR_ARRAY.map(({ id }) => (
          <Star key={id} />
        ))}
      </FlexWrapper>
    </Box>
    <FlexWrapper alignItems="center" gap="7.5rem" justifyContent="space-around">
      <FlexWrapper flexDirection="column" gap="0.3125rem" width="7.5rem">
        <Typography type="span" fontWeight="fw700" color="primary">
          {name}
        </Typography>
        <Typography type="span" fontSize="fs16" color="gray">
          {occupation}
        </Typography>
      </FlexWrapper>
      <Box>
        <Image
          height="3.4375rem"
          width="3.4375rem"
          borderRadius="50%"
          src={imageSrc}
        />
      </Box>
    </FlexWrapper>
    <FlexWrapper gap="0.3125rem" justifyContent="center">
      {BULLET_ARRAY.map(({ id }) => (
        <Image key={id} src={index === id ? "bullet" : "bulletBlank"} />
      ))}
    </FlexWrapper>
  </ReviewCardContainer>
);

const ReviewCardContainer = styled(FlexWrapper)`
  cursor: pointer;
`;
