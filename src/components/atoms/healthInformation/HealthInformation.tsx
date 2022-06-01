import React from "react";
import { Heart } from "assets/images";
import { IQuizSingleAnswers } from "state/types";
import { Box, Typography, FlexWrapper } from "components";

interface HealthInformationProps {
  answer: string | boolean | IQuizSingleAnswers;
  title: string | React.ReactNode;
  treatment: string;
}

export const HealthInformation: React.FC<HealthInformationProps> = ({
  answer,
  title,
  treatment,
}) => (
  <>
    {answer !== "False" && (
      <Box p="s20">
        <FlexWrapper alignItems="center" flexDirection="column" gap="1.25rem">
          <Box position="relative">
            <Box position="relative">
              <Heart />
            </Box>
          </Box>
          <FlexWrapper flexDirection="column" gap="2rem" width="85%">
            <Typography color="primary" textAlign="center" type="h4">
              {title}
            </Typography>
            <Box maxWidth="26.25rem" margin="s0auto">
              <Typography color="gray" textAlign="justify" type="caption12">
                {treatment}
              </Typography>
            </Box>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    )}
  </>
);
