import React from "react";
import { Heart } from "assets/images";
import { Box, Typography, FlexWrapper, Image } from "components";

interface HealthInformationProps {
  title: string;
  treatment: string;
  answer?: string | boolean;
}

export const HealthInformation: React.FC<HealthInformationProps> = ({
  title,
  treatment,
  answer,
}) => (
  <>
    {answer !== "False" && (
      <Box p="s20">
        <FlexWrapper alignItems="center" flexDirection="column" gap="1.25rem">
          <Box position="relative">
            <Box position="relative">
              <Heart />
            </Box>
            <Box position="absolute" top="35%" left="33%"></Box>
          </Box>
          <FlexWrapper flexDirection="column" width="85%" gap="2rem">
            <Typography textAlign="center" color="primary" type="h4">
              {title}
            </Typography>
            <Box maxWidth="26.25rem" margin="s0auto">
              <Typography
                type="caption12"
                letterSpacing="2px"
                textAlign="justify"
                color="gray"
              >
                {treatment}
              </Typography>
            </Box>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    )}
  </>
);
