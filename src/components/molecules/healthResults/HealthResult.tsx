import React from "react";
import {
  SectionWrapper,
  Box,
  FlexWrapper,
  Typography,
  Image,
} from "components";

const HealthResult: React.FC = ({ fromRight }) => {
  return (
    <Box p="20px">
      <FlexWrapper alignItems="center" gap="20px">
        <Box display={fromRight ? "none" : "block"} position="relative">
          <Image src="shape360" />
        </Box>
        <FlexWrapper flexDirection="column">
          <Typography color="primary" type="h2">
            {workoutFrequencyAnswer}
          </Typography>
          <Typography color="primary" type="h6">
            Get at least 150 minutes of moderate aerobic activity or 75 minutes
            of vigorous aerobic activity a week
          </Typography>
          {fromRight && (
            <Box position="relative">
              <Image src="shape360" />
            </Box>
          )}
        </FlexWrapper>
      </FlexWrapper>
    </Box>
  );
};

export default HealthResult;
{
  /* <Box position="absolute" top="35%" left="33%">
            <Typography color="primary" type="h6">
              Frequency
            </Typography>
          </Box> */
}
