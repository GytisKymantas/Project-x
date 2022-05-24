import React from "react";
import { Typography, Box } from "components";
import styled from "styled-components/macro";

interface testMetricProps {
  setValue: () => void;
  id: string;
}

export const testMetric: React.FC = ({ setValue, id }) => (
  <MeasurementWrapper
    borderBottom={ifImperial ? "1px solid orange" : "1x solid primary"}
  >
    <Typography
      fontWeight="fw700"
      color={ifImperial ? "orange" : "primary"}
      onClick={handleImperialSystem}
    >
      Imperial
    </Typography>
  </MeasurementWrapper>
);

const MeasurementWrapper = styled(Box)`
  cursor: pointer;
`;
