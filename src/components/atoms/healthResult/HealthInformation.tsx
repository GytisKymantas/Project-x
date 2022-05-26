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
    {answer !== "False" && (
      <Box p="s20">
        <FlexWrapper
          alignItems="center"
          flexDirection={{ _: "column" }}
          gap="1.25rem"
        >
          <Box position="relative">
            <Box position="relative">
              <Image src="shape360" />
            </Box>
            <Box position="absolute" top="35%" left="33%"></Box>
          </Box>
          <FlexWrapper flexDirection="column" gap="1.25rem">
            <Typography textAlign="center" color="primary" type="h2">
              {title}
            </Typography>
            <Typography textAlign="justify" color="primary" type="h6">
              {treatment}
            </Typography>
          </FlexWrapper>
        </FlexWrapper>
      </Box>
    )}
  </>
);
