import React from "react";
import { Box, Typography, FlexWrapper, Image } from "components";

interface HealthInformationProps {
  workoutFrequencyAnswer?: string | boolean;
  title: string;
  treatment: string;
  isAsthmatic?: boolean;
  isHeartCondition?: boolean;
  isSmoking?: boolean;
  isRight?: boolean;
  answer?: string | boolean;
}

export const HealthInformation: React.FC<HealthInformationProps> = ({
  workoutFrequencyAnswer,
  title,
  treatment,
  isAsthmatic,
  isHeartCondition,
  isSmoking,
  isRight,
  answer,
}) => {
  console.log(isRight, "is it right?");
  return (
    <>
      {answer.quizAnswer === true && (
        <Box p="20px">
          <FlexWrapper alignItems="center" gap="20px">
            <Box position="relative">
              {isRight === false && (
                <Box position="relative">
                  <Image src="shape360" />
                </Box>
              )}
              <Box position="absolute" top="35%" left="33%">
                <Typography color="primary" type="h6">
                  ok
                </Typography>
              </Box>
            </Box>
            <FlexWrapper flexDirection="column">
              <Typography color="primary" type="h2">
                {title}
              </Typography>
              <Typography color="primary" type="h6">
                {treatment}
              </Typography>
            </FlexWrapper>
            {isRight === true && (
              <Box position="relative">
                <Image src="shape360" />
              </Box>
            )}
          </FlexWrapper>
        </Box>
      )}
    </>
  );
};
