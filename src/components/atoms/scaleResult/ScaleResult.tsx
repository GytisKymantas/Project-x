import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Scale, BackwardArrow } from "assets/images";
import styled from "styled-components/macro";
import { SCALE_BULLETS, SCALE_ARRAY } from "constants/Constants";
import { nameOfTwoMonths, nameOfCurrentMonth } from "utils/metrics";
export const ScaleResult: React.FC = () => {
  const userData = useSelector(selectUserData);
  const weight = userData.weight;
  const desiredWeight = userData.desiredWeight;

  return (
    <Box width="26.5625rem" bg="white" p="s20">
      <Box position="absolute" width="24.0625rem" height="24.0625rem">
        <FlexWrapper
          position="absolute"
          width="100%"
          height="71.5%"
          top="28%"
          justifyContent="space-between"
        >
          {SCALE_ARRAY.map((week, i) => (
            <Box key={i} width="1px" height="100%" bg="lightwhite">
              {week}
            </Box>
          ))}
        </FlexWrapper>
      </Box>
      <Box bg="white" width="24.0625rem" height="23.9375rem">
        <Box mb="s50" p="s50">
          <FlexWrapper justifyContent="space-around">
            <FlexWrapper flexDirection="column">
              <Typography fontWeight="fw700" color="primary">
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
          {SCALE_BULLETS.map(({ id, top, left, coeficient }) => (
            <Box position="absolute" key={id} top={top} left={left}>
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
const Point = styled.div`
  ::after {
  }
`;
