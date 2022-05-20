import React from "react";
import { Box } from "components";
import styled from "styled-components/macro";
import { BackwardArrow } from "assets/images";

interface ProgressBarProps {
  width: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => (
  <>
    <ProgressLine position="relative" width={width} bg="orange">
      <BackwardArrow />
    </ProgressLine>
  </>
);

const ProgressLine = styled(Box)`
  transition: width 0.2s ease;
`;
