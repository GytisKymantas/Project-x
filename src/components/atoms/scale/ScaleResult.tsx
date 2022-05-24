import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Scale, BackwardArrow } from "assets/images";
import styled from "styled-components/macro";

export const ScaleResult: React.FC = () => {
  const userData = useSelector(selectUserData);
  const weight = userData.weight;
  const desiredWeight = userData.desiredWeight;
  const nameOfCurrentMonth = new Date().toLocaleString("default", {
    month: "long",
  });
  //TODO: fix mapping
  const nameOfTwoMonths = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date("6-6-2022"));

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
          <Box width="1px" height="100%" bg="lightwhite">
            1W
          </Box>
          <Box width="1px" height="100%" bg="lightwhite">
            2W
          </Box>
          <Box width="1px" height="100%" bg="lightwhite">
            3W
          </Box>
          <Box width="1px" height="100%" bg="lightwhite">
            4W
          </Box>
          <Box width="1px" height="100%" bg="lightwhite">
            5W
          </Box>
          <Box width="1px" height="100%" bg="lightwhite" />
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
              width="3.75rem"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                {userData.height
                  ? `${desiredWeight - weight}kg`
                  : `${desiredWeight - weight}lb`}
              </Typography>
            </FlexWrapper>
            <Box
              bg="red"
              borderRadius="s50%"
              width="0.9375rem"
              height="0.9375rem"
              border="scale"
            />
          </Box>
          <Box position="absolute" top="13%" left="31%">
            <FlexWrapper
              width="3.75rem"
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
            <Box
              bg="red"
              borderRadius="s50"
              width="0.9375rem"
              height="0.9375rem"
              border="scale"
            />
          </Box>
          <Box position="absolute" top="26%" left="52%">
            <FlexWrapper
              width="3.75rem"
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
            <Box
              bg="red"
              borderRadius="s50"
              width="0.9375rem"
              height="0.9375rem"
              border="3px solid white"
            />
          </Box>
          <Box position="absolute" top="42%" left="67%">
            <FlexWrapper
              width="3.75rem"
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
            <Box
              bg="red"
              borderRadius="s50"
              width="0.9375rem"
              height="0.9375rem"
              border="scale"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const Point = styled.div`
  ::after {
  }
`;
