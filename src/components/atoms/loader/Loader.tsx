import React from "react";
import { Box } from "../wrappers/Box";
import { theme } from "styles/theme";
import styled, { keyframes } from "styled-components/macro";

export const Loader: React.FC = () => {
  return (
    <Container>
      <LoaderContainer>.</LoaderContainer>
    </Container>
  );
};

const animate = keyframes`
    0%,
    100% {
      left: 95px;
    }
    25% {
      transform: scale(.3);
    }
    50% {
      left: 0;
    }
    75% {
      transform: scale(1);
    }
  `;

const Container = styled(Box)`
  position: absolute;
  top: 40%;
  left: 40%;
  display: block;
`;

const LoaderContainer = styled.span`
  width: 6.25rem;
  height: 6.25rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: inherit;
    width: inherit;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: ${animate} 0.3s infinite cubic-bezier(0.77, 0, 0.175, 1);
  }

  &::before {
    background-color: ${theme.colors.lightwhite};
  }
  &::after {
    background-color: ${theme.colors.orange};
    animation-delay: 0.5s;
  }
`;
