import React, { useState } from "react";
import { Box, ContentWrapper, FlexWrapper, Typography } from "components";
import styled from "styled-components/macro";

interface MetricWrapperProps {
  children: React.ReactNode;
  handleImperial?: () => void;
  handleMetric?: () => void;
  Imperial?: boolean;
}

export const MetricWrapper: React.FC<MetricWrapperProps> = ({
  children,
  handleImperial,
  handleMetric,
  Imperial,
}) => {
  //   const [ifImperial, setIfImperial] = useState(false);
  return (
    <ContentWrapper margin="s0auto" width="25rem">
      <FlexWrapper flexDirection="column" alignItems="center">
        <FlexWrapper
          gap="0.625rem"
          width="100%"
          pt="s10"
          mb="s25"
          justifyContent="center"
          borderBottom="scales"
        >
          <MeasurementWrapper
            pb="s10"
            borderBottom={
              Imperial ? "1px solid orange" : "1x solid transparent"
            }
          >
            <Typography
              fontWeight="fw700"
              color={Imperial ? "orange" : "primary"}
              onClick={handleImperial}
            >
              Imperial
            </Typography>
          </MeasurementWrapper>
          <MeasurementWrapper
            pb="s10"
            borderBottom={
              !Imperial ? "1px solid orange" : "1x solid transparent"
            }
          >
            <Typography
              fontWeight="fw700"
              color={Imperial ? "primary" : "orange"}
              onClick={handleMetric}
            >
              Metric
            </Typography>
          </MeasurementWrapper>
        </FlexWrapper>
        {children}
      </FlexWrapper>
    </ContentWrapper>
  );
};

const MeasurementWrapper = styled(Box)`
  cursor: pointer;
`;
