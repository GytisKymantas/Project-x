import React from "react";
import { Box, FlexWrapper, Typography, Image } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { caloricImperialIntake, caloricMetricIntake } from "utils/metrics";

export const CaloricCounter: React.FC = () => {
  const userData = useSelector(selectUserData);
  const feet = userData.feet;
  const caloricIntake = caloricMetricIntake(userData?.weight);
  const caloricIntakeImperial = caloricImperialIntake(userData?.weight);
  //TODO: fix
  return (
    <Box bg="white" height="26.5625rem" m="s0auto">
      <FlexWrapper flexDirection="column" alignItems="center" gap={"0.625rem"}>
        <Typography type="h5" color="primary">
          Daily Calory Intake
        </Typography>
        {feet ? (
          <Typography type="h4" color="primary">
            {caloricIntakeImperial} - {caloricIntakeImperial + 200}kcal
          </Typography>
        ) : (
          <Typography type="h4" color="primary">
            {caloricIntake} - {caloricIntake + 200}kcal
          </Typography>
        )}
        <Image src="orange360" />
      </FlexWrapper>
    </Box>
  );
};
