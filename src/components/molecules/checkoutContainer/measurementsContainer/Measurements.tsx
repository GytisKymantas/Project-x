import React, { useState } from "react";
import { Typography, Container, SectionWrapper } from "components";
import { InputForm } from "./InputForm";
import { ProgressBar } from "components/atoms/progressBar/ProgressBar";

export const Measurements = () => {
  return (
    <>
      <ProgressBar width="90%" />
      <SectionWrapper>
        <Container>
          <Typography textAlign="center" color="primary" type="h2">
            Enter your measurements
          </Typography>
          <InputForm />
        </Container>
      </SectionWrapper>
    </>
  );
};
