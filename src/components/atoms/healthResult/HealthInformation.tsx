import React from "react";
import { Box, Typography, FlexWrapper, Image } from "components";

interface HealthInformationProps {
  title: string;
  treatment: string;
  answer?: string | boolean;
  id: string;
}

export const HealthInformation: React.FC<HealthInformationProps> = ({
  title,
  treatment,
  answer,
  id,
}) => (
  <>
    {answer && (
      <Box p="s20">
        <FlexWrapper alignItems="center" gap="1.25rem">
          <Box position="relative">
            {id % 2 === 1 && (
              <Box position="relative">
                <Image src="shape360" />
              </Box>
            )}
            <Box position="absolute" top="35%" left="33%"></Box>
          </Box>
          <FlexWrapper flexDirection="column">
            <Typography color="primary" type="h2">
              {title}
            </Typography>
            <Typography color="primary" type="h6">
              {treatment}
            </Typography>
          </FlexWrapper>
          {id % 2 === 0 && (
            <Box position="relative">
              <Image src="shape360" />
            </Box>
          )}
        </FlexWrapper>
      </Box>
    )}
  </>
);
