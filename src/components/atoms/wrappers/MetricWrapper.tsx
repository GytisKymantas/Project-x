import React from "react";
import { Box, ContentWrapper, FlexWrapper, Typography } from "components";
import styled from "styled-components/macro";

interface MetricWrapperProps {
  children: React.ReactNode;
  handleSystem?: () => void;
  Imperial?: boolean;
}

export const MetricWrapper: React.FC<MetricWrapperProps> = ({
  children,
  handleSystem,
  Imperial,
}) => {
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
            borderBottom={Imperial ? "orangedefault" : "transparent"}
            onClick={handleSystem}
          >
            <Typography
              fontWeight="fw700"
              color={Imperial ? "orange" : "primary"}
            >
              Imperial
            </Typography>
          </MeasurementWrapper>
          <MeasurementWrapper
            pb="s10"
            borderBottom={!Imperial ? "orangedefault" : "transparent"}
            onClick={handleSystem}
          >
            <Typography
              fontWeight="fw700"
              color={Imperial ? "primary" : "orange"}
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
