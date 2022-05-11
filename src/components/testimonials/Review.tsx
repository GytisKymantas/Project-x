import React from "react";
import {
  SectionWrapper,
  Container,
  Box,
  FlexWrapper,
  Image,
  GridWrapper,
} from "components";
import { Star, Bullet, BulletBlank } from "assets/images";

import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { Typography } from "components/typography/Typography";

export const Review: React.FC = () => (
  <SectionWrapper>
    <Container>
      <Box mx="auto" my="s50" textAlign="center" maxWidth="750px">
        <FlexWrapper flexDirection="column">
          <SectionHeader
            type="h3"
            header="What Customes Say"
            paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
          />
        </FlexWrapper>
      </Box>
      <Box>
        <GridWrapper gridTemplateColumns="repeat(2,1fr)" margin="0 70px">
          <FlexWrapper flexDirection="column" gap="30px">
            <SectionHeader
              type="h4"
              header="What Customes Say"
              paragraph="“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.”"
            />
            <Box mb="s25">
              <FlexWrapper>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
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
          <Box margin="s0auto" position="relative">
            <Image src="yoga" />
            <Box
              position="absolute"
              top="0"
              left="19%"
              opacity="0.6"
              zIndex={-1}
            >
              <Image src="yellowtombstone" height="200px" height="320px" />
            </Box>
          </Box>
        </GridWrapper>
      </Box>
    </Container>
  </SectionWrapper>
);
