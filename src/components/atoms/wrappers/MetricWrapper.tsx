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
          borderBottom="scales"
          gap="0.625rem"
          justifyContent="center"
          mb="s25"
          pt="s10"
          width="100%"
        >
          <MeasurementWrapper
            borderBottom={Imperial ? "orangedefault" : "transparent"}
            onClick={handleSystem}
            pb="s10"
          >
            <Typography
              color={Imperial ? "orange" : "primary"}
              fontWeight="fw700"
            >
              Imperial
            </Typography>
          </MeasurementWrapper>
          <MeasurementWrapper
            borderBottom={!Imperial ? "orangedefault" : "transparent"}
            onClick={handleSystem}
            pb="s10"
          >
            <Typography
              color={Imperial ? "primary" : "orange"}
              fontWeight="fw700"
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
