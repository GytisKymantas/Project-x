import React from "react";
import { FlexWrapper, Box, Typography, Image, SectionHeader } from "components";
import { Star } from "assets/images";
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
  handleImageClick,
  index,
  imageSrc,
  name,
  occupation,
  paragraph,
}) => (
  <ReviewCardContainer
    borderRadius="br20"
    boxShadow="default"
    flexDirection="column"
    height="25rem"
    gap="3.875rem"
    onClick={handleImageClick}
    p="s30"
  >
    {" "}
    <Box height="6.25rem">
      <SectionHeader center header={header} paragraph={paragraph} type="h4" />
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
        <Typography color="primary" fontWeight="fw700" type="span">
          {name}
        </Typography>
        <Typography color="gray" fontSize="fs16" type="span">
          {occupation}
        </Typography>
      </FlexWrapper>
      <Box>
        <Image
          borderRadius="50%"
          height="3.4375rem"
          src={imageSrc}
          width="3.4375rem"
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
