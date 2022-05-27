import React from "react";
import { Box } from "components";
import { theme } from "styles/theme";
import styled from "styled-components/macro";
import { BackwardArrow } from "assets/images";

interface ProgressBarProps {
  width: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => (
  <>
    <ProgressLine position="relative" width={width} bg="orange">
      <HiddenSpan>.</HiddenSpan>
    </ProgressLine>
  </>
);

const ProgressLine = styled(Box)`
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: contain;
  transition: width 0.2s ease;
`;
const HiddenSpan = styled.span`
  color: ${theme.colors.orange};
`;
