import { Box, Container, Image, FlexWrapper } from "components";
import { QuizStartButton } from "components/buttons/QuizStartButton";
import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { theme } from "styles/theme";

export const Navigation: React.FC = () => {
  return (
    <Box height={"72px"} maxWidth={"1440px"} backgroundColor={"white"}>
      <FlexWrapper
        alignItems="center"
        justifyContent="space-around"
        height="100%"
      >
        <Homelink to="/">
          Fit<span> </span>
          on<span style={{ color: "red" }}>-</span>Time
          {/* <Image src="logoblack" width="190px" /> */}
          {/* <Image src="logotrans2" /> */}
        </Homelink>
        <FlexWrapper as="ul" gap="10px">
          <Link to="/" textDecoration="none">
            Home
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Partners</Link>
          <Link to="/">Testimonials</Link>
        </FlexWrapper>
        <QuizStartButton>Start Quiz</QuizStartButton>
      </FlexWrapper>
    </Box>
  );
};

const Homelink = styled(Link)`
  color: ${theme.colors.primary};
  font-family: "Satisfy", cursive;
  font-size: ${theme.fontSizes.fs32};
  text-decoration: none;
`;
