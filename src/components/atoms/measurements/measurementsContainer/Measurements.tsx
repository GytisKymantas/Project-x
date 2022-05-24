import React from "react";
import {
  Typography,
  Container,
  SectionWrapper,
  ProgressBar,
  InputForm,
} from "components";

export const Measurements: React.FC = () => (
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
