import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Scale, BackwardArrow } from "assets/images";
import { SCALE_BULLETS, SCALE_ARRAY } from "constants/Constants";
import { nameOfTwoMonths, nameOfCurrentMonth } from "utils/metrics";

export const ScaleResult: React.FC = () => {
  const userData = useSelector(selectUserData);
  const weight = userData.weight;
  const desiredWeight = userData.desiredWeight;

  return (
    <Box bg="white" m="auto" p="s20" width="26.5625rem">
      <Box height="24.0625rem" position="absolute" width="24.0625rem">
        <FlexWrapper
          height="71.5%"
          justifyContent="space-between"
          position="absolute"
          top="28%"
          width="100%"
        >
          {SCALE_ARRAY.map((week, i) => (
            <Box height="100%" bg="lightwhite" key={i} width="1px">
              {week}
            </Box>
          ))}
        </FlexWrapper>
      </Box>
      <Box bg="white" height="23.9375rem" width="24.0625rem">
        <Box mb="s50" p="s50">
          <FlexWrapper justifyContent="space-around">
            <FlexWrapper flexDirection="column">
              <Typography color="primary" fontWeight="fw700">
                {nameOfCurrentMonth}
              </Typography>
              <Typography color="primary">
                {userData.height ? `${weight}kg` : `${weight}lb`}
              </Typography>
            </FlexWrapper>
            <BackwardArrow />
            <FlexWrapper flexDirection="column">
              <Typography color="primary" fontWeight="fw700">
                {nameOfTwoMonths}
              </Typography>
              <Typography color="primary">
                {userData.height ? `${desiredWeight}kg` : `${desiredWeight}lb`}
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </Box>
        <Box position="relative">
          <Scale />
          {SCALE_BULLETS.map(({ id, left, top }) => (
            <Box position="absolute" key={id} left={left} top={top}>
              <FlexWrapper
                width="3.75rem"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography color="primary">
                  {userData.height
                    ? `${(desiredWeight - weight) / 4}kg`
                    : `${(desiredWeight - weight) / 4}lb`}
                </Typography>
              </FlexWrapper>
              <Box
                bg="red"
                borderRadius="br50"
                width="0.9375rem"
                height="0.9375rem"
                border="scale"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
