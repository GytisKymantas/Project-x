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

  return (
    <SectionWrapper>
      <Container>
        <Typography color="primary" type="h2">
          Enter your measurements
        </Typography>
        <ContentWrapper margin="0 auto" width="25rem">
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
                style={{
                  borderBottom: borderOrange
                    ? "1px solid orange"
                    : "1px solid black",
                }}
              />
              {ifImperial ? (
                <FlexWrapper gap="5px">
                  <Input
                    type="text"
                    placeholder="Height"
                    style={{ borderBottom: "1px solid black", width: "82px" }}
                    width="82px"
                  />
                  <Input
                    type="text"
                    placeholder="Inches"
                    style={{ borderBottom: "1px solid black", width: "82px" }}
                    width="82px"
                  />
                </FlexWrapper>
              ) : (
                <Input
                  type="text"
                  placeholder="Height"
                  style={{ borderBottom: "1px solid black" }}
                />
              )}
              {/* <Input
              type="text"
              placeholder="Height"
              style={{ borderBottom: "1px solid black" }}
            /> */}

              <Input
                type="text"
                placeholder="Weight"
                style={{ borderBottom: "1px solid black" }}
              />

              <Input
                type="text"
                placeholder="Desired Weight"
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
