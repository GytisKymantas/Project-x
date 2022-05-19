import React from "react";
import { Box, Typography, FlexWrapper } from "components";
import { Scale, BackwardArrow } from "assets/images";

export const ScaleResult = () => {
  return (
    <Box width="425px" bg="orangelight" p="20px">
      <Box bg="white" width="385px" height="383px">
        <Box mb="50px" p="50px">
          <FlexWrapper justifyContent="space-around">
            <FlexWrapper flexDirection="column">
              <Typography color="primary">May2022</Typography>
              <Typography fontWeight="fw700" color="primary">
                160kg
              </Typography>
            </FlexWrapper>
            <BackwardArrow />
            <FlexWrapper flexDirection="column">
              <Typography color="primary">July2022</Typography>
              <Typography fontWeight="fw700" color="primary">
                120kg
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </Box>
        <Box position="relative">
          <Scale />
          <Box position="absolute" top="13%" left="31%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                <span>-</span>31.5 kg
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="50%">
              .
            </Box>
          </Box>
          <Box position="absolute" top="-9%" left="13%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                <span>-</span>31.5 kg
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="50%">
              .
            </Box>
          </Box>
          <Box position="absolute" top="26%" left="52%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                <span>-</span>31.5 kg
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="50%">
              .
            </Box>
          </Box>
          <Box position="absolute" top="42%" left="67%">
            <FlexWrapper
              width="60px"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography color="primary">
                <span>-</span>31.5 kg
              </Typography>
            </FlexWrapper>
            <Box width="20px" bg="red" borderRadius="50%">
              .
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box width="20px" bg="red" borderRadius="50%" position="absolute" top="26%" left="31%">
      
      </Box>
      <Box width="20px" bg="red" borderRadius="50%" position="absolute" top="5%" left="15%">
    two
      </Box>
      <Box width="20px" bg="red" borderRadius="50%" position="absolute" top="50%" left="66%">
    three
      </Box>
      <Box width="20px" bg="red" borderRadius="50%" position="absolute" top="50%" left="56%">
    four
      </Box> */}
    </Box>
  );
};
