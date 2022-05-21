import { Box, FlexWrapper, HomeLink } from "components";
import { QuizStartButton } from "components/atoms/buttons/QuizStartButton";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { theme } from "styles/theme";
import scrollTo from "gatsby-plugin-smoothscroll";
import { NAVIGATION_LINKS } from "constants/Constants";
import { Mobnav } from "assets/images";

interface NavigationProps {
  checkoutPage?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ checkoutPage }) => {
  const [fix, setFix] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  console.log(mobileView);
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
      height="4.5rem"
      width="100%"
      backgroundColor="white"
      position={fix ? "fixed" : "initial"}
      zIndex={11}
    >
      {mobileView && (
        <MobileCover>
          <FlexWrapper
            gap="20px"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {NAVIGATION_LINKS.map(({ title, id }) => (
              <ListItem onClick={() => scrollTo(`#${title}`)} key={id}>
                {title}
              </ListItem>
            ))}
          </FlexWrapper>
        </MobileCover>
      )}
      <FlexWrapper
        alignItems="center"
        justifyContent="space-around"
        height="100%"
      >
        {/* <Box>mob</Box> */}
        <HomeLink />
        {checkoutPage ? (
          ""
        ) : (
          <FlexWrapper
            as="ul"
            gap="10px"
            display={{ _: "none", ltablet: "flex" }}
          >
            {NAVIGATION_LINKS.map(({ title, id }) => (
              <ListItem onClick={() => scrollTo(`#${title}`)} key={id}>
                {title}
              </ListItem>
            ))}
          </FlexWrapper>
        )}
        {checkoutPage ? (
          <QuizStartButton width="8.5625rem">Check Product</QuizStartButton>
        ) : (
          <QuizStartButton width="8.5625rem">Start Quiz</QuizStartButton>
        )}
        {mobileView ? (
          <MobileWrapper
            onClick={() => setMobileView(false)}
            z-index="200"
            display={{ _: "block", ltablet: "none" }}
          >
            <Mobnav />
          </MobileWrapper>
        ) : (
          <MobileWrapper
            display={{ _: "block", ltablet: "none" }}
            onClick={() => setMobileView(true)}
          >
            <Mobnav />
          </MobileWrapper>
        )}
      </FlexWrapper>
    </Box>
  );
};

// const Homelink = styled(Link)`
//   color: ${theme.colors.primary};
//   font-family: "Satisfy", cursive;
//   font-size: ${theme.fontSizes.fs32};
//   text-decoration: none;
// `;
const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
`;
const MobileCover = styled(FlexWrapper)`
  background: orange;
  color: white;
  height: 100vh;
  opacity: 0.6;
  position: absolute;
  justify-content: center;
  width: 100%;
  z-index: 30;
`;
const MobileWrapper = styled(Box)`
  cursor: pointer;
  display: ${({ display }) => display};
  z-index: 44;
`;
