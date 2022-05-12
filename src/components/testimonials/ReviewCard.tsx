import React from "react";
import { FlexWrapper, Box, Typography } from "components";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { Star } from "assets/images";
import { RATING_STAR_ARRAY } from "constants/Constants";

interface ReviewCardProps {
  header: string;
  paragraph: string;
  name: string;
  occupation: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  header,
  paragraph,
  name,
  occupation,
}) => {
  return (
    <FlexWrapper flexDirection="column" gap="30px">
      <SectionHeader type="h4" header={header} paragraph={paragraph} />
      <Box mb="s25">
        <FlexWrapper>
          {RATING_STAR_ARRAY.map((star, i) => (
            <Star key={i} />
          ))}
        </FlexWrapper>
      </Box>
      <Box>
        <FlexWrapper flexDirection="column" gap="5px">
          <Typography type="span" fontWeight="fw700" color="primary">
            {name}
          </Typography>
          <Typography type="span" fontSize="fs16" color="gray">
            {occupation}
          </Typography>
        </FlexWrapper>
        {/* <FlexWrapper justifyContent="center">
          <Bullet />
          <BulletBlank />
          <BulletBlank />
        </FlexWrapper> */}
      </Box>
    </FlexWrapper>
  );
};
