import React from "react";
import { FlexWrapper, Box, Typography } from "components";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { Star, Bullet, BulletBlank } from "assets/images";
import { RATING_STAR_ARRAY } from "constants/Constants";

export const ReviewCard = () => (
  <FlexWrapper flexDirection="column" gap="30px">
    <SectionHeader
      type="h4"
      header="What Customes Say"
      paragraph="“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”"
    />
    <Box mb="s25">
      <FlexWrapper>
        {RATING_STAR_ARRAY.map((star) => (
          <Star key={star} />
        ))}
      </FlexWrapper>
    </Box>
    <Box>
      <FlexWrapper flexDirection="column" gap="5px">
        <Typography type="span" fontWeight="fw700" color="primary">
          Dragos Gontariu
        </Typography>
        <Typography type="span" fontSize="fs16" color="gray">
          Marketing Manager
        </Typography>
      </FlexWrapper>
      <FlexWrapper justifyContent="center">
        <Bullet />
        <BulletBlank />
        <BulletBlank />
      </FlexWrapper>
    </Box>
  </FlexWrapper>
);
