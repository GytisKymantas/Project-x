import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Scale, Bullet, BackwardArrow } from "assets/images";

export const ScaleResult: React.FC = () => {
  const userData = useSelector(selectUserData);
  const weight = userData.weight;
  const desiredWeight = userData.desiredWeight;
  const nameOfCurrentMonth = new Date().toLocaleString("default", {
    month: "long",
  });
  const nameOfTwoMonths = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date("6-6-2022"));

  return (
    <Box width="26.5625rem" bg="orangelight" p="s20">
      <Box bg="white" width="385px" height="383px">
        <Box mb="s50" p="s50">
          <FlexWrapper justifyContent="space-around">
            <FlexWrapper flexDirection="column">
              <Typography color="primary">{nameOfCurrentMonth}</Typography>
              <Typography fontWeight="fw700" color="primary">
                {userData.height ? `${weight}kg` : `${weight}lb`}
              </Typography>
            </FlexWrapper>
            <BackwardArrow />
            <FlexWrapper flexDirection="column">
              <Typography color="primary">{nameOfTwoMonths}</Typography>
              <Typography fontWeight="fw700" color="primary">
                {userData.height
                  ? `${weight - (weight * 15) / 100}kg`
                  : `${weight - (weight * 15) / 100}lb`}
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </Box>
        <Box position="relative">
          <Scale />
          <Box position="absolute" top="-9%" left="13%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                {userData.height
                  ? `${desiredWeight - weight}kg`
                  : `${desiredWeight - weight}lb`}
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="br50">
              <Bullet />
            </Box>
          </Box>
          <Box position="absolute" top="13%" left="31%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                {userData.height
                  ? `${Math.round(
                      desiredWeight - (weight - (weight * 5) / 100)
                    )}kg`
                  : `${Math.round(
                      desiredWeight - (weight - (weight * 5) / 100)
                    )}lb`}
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="br50">
              <Bullet />
            </Box>
          </Box>
          <Box position="absolute" top="26%" left="52%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                {userData.height
                  ? `${Math.round(
                      desiredWeight - (weight - (weight * 6) / 100)
                    )}kg`
                  : `${Math.round(
                      desiredWeight - (weight - (weight * 6) / 100)
                    )}lb`}
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="br50">
              <Bullet />
            </Box>
          </Box>
          <Box position="absolute" top="42%" left="67%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                {userData.height
                  ? `${Math.round(
                      desiredWeight - (weight - (weight * 7.5) / 100)
                    )}kg`
                  : `${Math.round(
                      desiredWeight - (weight - (weight * 7.5) / 100)
                    )}lb`}
              </Typography>
            </FlexWrapper>
            <Box width="1.25rem" bg="red" borderRadius="br50">
              <Bullet />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
