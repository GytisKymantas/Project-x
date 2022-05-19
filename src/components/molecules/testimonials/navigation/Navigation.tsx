import { Box, FlexWrapper } from "components";
import { QuizStartButton } from "components/atoms/buttons/QuizStartButton";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { theme } from "styles/theme";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Mobnav } from "assets/images";

interface NavigationProps {
  checkoutPage: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ checkoutPage }) => {
  const [fix, setFix] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 780) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Box
      height="72px"
      width="100%"
      backgroundColor="white"
      position={fix ? "fixed" : "block"}
      zIndex={11}
    >
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
        {checkoutPage ? (
          ""
        ) : (
          <FlexWrapper
            as="ul"
            gap="10px"
            display={{ _: "none", ltablet: "flex" }}
          >
            <ListItem as="li" onClick={() => scrollTo("#home")}>
              Home
            </ListItem>
            <ListItem as="li" onClick={() => scrollTo("#about")}>
              About
            </ListItem>
            <ListItem as="li" onClick={() => scrollTo("#testimonials")}>
              Testimonials
            </ListItem>
            <ListItem as="li" onClick={() => scrollTo("#partners")}>
              Partners
            </ListItem>
          </FlexWrapper>
        )}
        {checkoutPage ? (
          <QuizStartButton width="137px">Check Product</QuizStartButton>
        ) : (
          <QuizStartButton width="137px">Start Quiz</QuizStartButton>
        )}
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
const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
`;
