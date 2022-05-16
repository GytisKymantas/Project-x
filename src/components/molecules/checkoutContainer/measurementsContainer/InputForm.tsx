import React, { useState } from "react";
import {
  Box,
  Input,
  FlexWrapper,
  ContentWrapper,
  Typography,
  BaseButton,
} from "components";

import styled from "styled-components/macro";

export const InputForm = () => {
  const [ifImperial, setIfImperial] = useState(false);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [desiredWeight, setDesiredWeight] = useState(0);

  console.log(age, "this is age");
  console.log(height, "this is height");
  console.log(weight, "this is weight");
  console.log(desiredWeight, "this is desired weight");

  return (
    <ContentWrapper margin="s0auto" width="25rem">
      <FlexWrapper flexDirection="column" alignItems="center">
        <FlexWrapper
          gap="10px"
          width="100%"
          py="10px"
          mb="25px"
          justifyContent="center"
          borderBottom="1px solid gray"
        >
          <Typography
            fontWeight="700"
            color={ifImperial ? "orange" : "primary"}
            borderBottom={ifImperial ? "1px solid orange" : "1x solid primary"}
            onClick={() => setIfImperial(true)}
          >
            Imperial
          </Typography>
          <Typography
            fontWeight="700"
            color={ifImperial ? "primary" : "orange"}
            borderBottom={ifImperial ? "1px solid primary" : "1x solid orange"}
            onClick={() => setIfImperial(false)}
          >
            Metric
          </Typography>
        </FlexWrapper>
        <FormContainer>
          <FlexWrapper flexDirection="column" gap="25px" width="100%">
            <FlexWrapper
              width="100%"
              borderBottom="1px solid black"
              justifyContent="space-between"
            >
              <Input
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                required
                minValue={18}
                maxValue={100}
              />
              <Box mt="17px">
                <Typography
                  color="primary"
                  fontFamily="Satisfy"
                  fontSize="15px"
                >
                  years
                </Typography>
              </Box>
            </FlexWrapper>
            {ifImperial ? (
              <FlexWrapper gap="26px">
                <FlexWrapper
                  width="100%"
                  borderBottom="1px solid black"
                  justifyContent="space-between"
                >
                  <Input
                    type="text"
                    placeholder="Height"
                    onChange={(e) => setHeight(e.target.value)}
                    width="162px"
                  />
                  <Box mt="17px">
                    <Typography
                      color="primary"
                      fontFamily="Satisfy"
                      fontSize="15px"
                    >
                      Ft
                    </Typography>
                  </Box>
                </FlexWrapper>
                <FlexWrapper
                  width="100%"
                  borderBottom="1px solid black"
                  justifyContent="space-between"
                >
                  <Input type="text" placeholder="Inches" width="162px" />
                  <Box mt="17px">
                    <Typography
                      color="primary"
                      fontFamily="Satisfy"
                      fontSize="15px"
                    >
                      in
                    </Typography>
                  </Box>
                </FlexWrapper>
              </FlexWrapper>
            ) : (
              <FlexWrapper
                width="100%"
                borderBottom="1px solid black"
                justifyContent="space-between"
              >
                <Input
                  type="number"
                  placeholder="Height"
                  width="100%"
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  minValue={100}
                  maxValue={230}
                />
                <Box mt="17px">
                  <Typography
                    color="primary"
                    fontFamily="Satisfy"
                    fontSize="15px"
                  >
                    cm
                  </Typography>
                </Box>
              </FlexWrapper>
            )}
            <FlexWrapper
              width="100%"
              borderBottom="1px solid black"
              justifyContent="space-between"
            >
              <Input
                type="number"
                placeholder="Weight"
                required
                onChange={(e) => setWeight(e.target.value)}
                minValue={10}
                maxValue={230}
              />
              <Box mt="17px">
                <Typography
                  color="primary"
                  fontFamily="Satisfy"
                  fontSize="15px"
                >
                  kg
                </Typography>
              </Box>
            </FlexWrapper>
            <FlexWrapper
              width="100%"
              borderBottom="1px solid black"
              justifyContent="space-between"
            >
              <Input
                type="text"
                placeholder="Desired Weight"
                required
                onChange={(e) => setDesiredWeight(e.target.value)}
                minValue={30}
                maxValue={230}
              />
              <Box mt="17px">
                <Typography
                  color="primary"
                  fontFamily="Satisfy"
                  fontSize="15px"
                >
                  kg
                </Typography>
              </Box>
            </FlexWrapper>
            <BaseButton type="submit">SUBMIT</BaseButton>
          </FlexWrapper>
        </FormContainer>
      </FlexWrapper>
    </ContentWrapper>
  );
};
const FormContainer = styled.form`
  width: 100%;
`;