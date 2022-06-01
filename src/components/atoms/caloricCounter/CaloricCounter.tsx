import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { caloricImperialIntake, caloricMetricIntake } from "utils/metrics";

export const CaloricCounter: React.FC = () => {
  const userData = useSelector(selectUserData);
  const caloricIntake = caloricMetricIntake(userData?.weight);
  const caloricIntakeImperial = caloricImperialIntake(userData?.weight);
  const feet = userData.feet;
  return (
    <Box bg="white" height="26.5625rem" m="s0auto">
      <FlexWrapper alignItems="center" flexDirection="column" gap="0.625rem">
        <Typography color="primary" type="h5">
          Daily Calory Intake
        </Typography>
        {feet ? (
          <Typography color="primary" type="h4">
            {caloricIntakeImperial} - {caloricIntakeImperial + 200}kcal
          </Typography>
        ) : (
          <Typography color="primary" type="h4">
            {caloricIntake} - {caloricIntake + 200}kcal
          </Typography>
        )}
        <Image src="orange360" />
      </FlexWrapper>
    </Box>
  );
};
