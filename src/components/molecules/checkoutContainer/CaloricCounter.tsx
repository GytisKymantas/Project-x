import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";

interface CaloricCounterProps {
  calories: number;
}

export const CaloricCounter: React.FC<CaloricCounterProps> = ({ calories }) => {
  return (
    <Box bg="white" width="100%" height="100%" boxShadow={"1px 5px 16px black"}>
      <FlexWrapper flexDirection="column" alignItems="center" gap={"10px"}>
        <Typography type="h5" color="primary">
          Daily Calory Intake
        </Typography>
        <Typography type="h4" color="primary">
          {calories} - {calories + 200}
        </Typography>
        <Image src="shape360" />
      </FlexWrapper>
    </Box>
  );
};
