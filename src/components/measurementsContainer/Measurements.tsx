import React, { useState } from "react";
import {
  Typography,
  Container,
  SectionWrapper,
  Box,
  FlexWrapper,
  Input,
  ContentWrapper,
} from "components";
import { QuizStartButton } from "components/buttons/QuizStartButton";
import styled from "styled-components/macro";

export const Measurements = () => {
  const [borderOrange, SetBorderOrange] = useState(false);
  const [ifImperial, setIfImperial] = useState(false);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [desiredWeight, setDesiredWeight] = useState(0);
  console.log(age, "this is age");
  console.log(height, "this is height");
  console.log(weight, "this is weight");
  console.log(desiredWeight, "this is desired weight");

  // const handleAge = (e) => {
  // if (age > 13 && age < 100) {

  // }
  // };

  return (
    <SectionWrapper>
      <Container>
        <Typography color="primary" type="h2">
          Enter your measurements
        </Typography>
        <ContentWrapper margin="s0auto" width="25rem">
          <FlexWrapper flexDirection="column" alignItems="center">
            <FlexWrapper gap="10px">
              <Typography color="primary" onClick={() => setIfImperial(true)}>
                Imperial
              </Typography>
              <Typography color="primary" onClick={() => setIfImperial(false)}>
                Metric
              </Typography>
            </FlexWrapper>
            <FlexWrapper flexDirection="column" gap="25px" width="100%">
              <Input
                type="text"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                minValue={18}
                maxValue={100}
                style={{
                  borderBottom: borderOrange
                    ? "1px solid orange"
                    : "1px solid black",
                }}
              />
              {ifImperial ? (
                <FlexWrapper gap="26px">
                  <Input
                    type="text"
                    placeholder="Height"
                    onChange={(e) => setHeight(e.target.value)}
                    style={{ borderBottom: "1px solid black", width: "82px" }}
                    width="162px"
                  />
                  <Input
                    type="text"
                    placeholder="Inches"
                    style={{ borderBottom: "1px solid black", width: "82px" }}
                    width="162px"
                  />
                </FlexWrapper>
              ) : (
                <Input
                  type="text"
                  placeholder="Height"
                  onChange={(e) => setHeight(e.target.value)}
                  style={{ borderBottom: "1px solid black" }}
                />
              )}
              <Input
                type="text"
                placeholder="Weight"
                onChange={(e) => setWeight(e.target.value)}
                style={{ borderBottom: "1px solid black" }}
              />
              <Input
                type="text"
                placeholder="Desired Weight"
                onChange={(e) => setDesiredWeight(e.target.value)}
                style={{ borderBottom: "1px solid black" }}
              />
              <QuizStartButton width="100%">Submit</QuizStartButton>
            </FlexWrapper>
          </FlexWrapper>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};
