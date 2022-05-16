import React from "react";
import { Box, Image } from "components";
import styled from "styled-components/macro";

interface ProgressBarProps {
  width: string;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <>
      <ProgressLine position="relative" width={width} bg="orange">
        <Image />
      </ProgressLine>
    </>
  );
};

const ProgressLine = styled(Box)`
  transition: width 0.2s ease;
`;
