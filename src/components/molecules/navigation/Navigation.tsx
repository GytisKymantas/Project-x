import React, { useState, useEffect } from "react";
import {
  Box,
  FlexWrapper,
  HomeLink,
  BaseButton,
  QuizStartButton,
  Typography,
  GenderButtons,
} from "components";
import { theme } from "styles/theme";
import styled from "styled-components/macro";
import scrollTo from "gatsby-plugin-smoothscroll";
import { NAVIGATION_LINKS } from "constants/Constants";
import { Mobnav, MobCross } from "assets/images";

interface NavigationProps {
  checkoutPage?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ checkoutPage }) => {
  const [fix, setFix] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY >= 780) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  // if (window.innerWidth === 760) {
  //   setMobileView(false);
  // }
  // useEffect(() => {
  //   if (tablet) {
  //     setMobileView(true);
  //   }
  // }, [mobileView]);

  window.addEventListener("scroll", handleScrollY);

  return (
    <Box
      height="10vh"
      width="100%"
      backgroundColor="white"
      position={fix ? "fixed" : "initial"}
      boxShadow="default"
      zIndex={11}
    >
      {mobileView && (
        <MobileCover>
          <FlexWrapper
            gap="1.25rem"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {NAVIGATION_LINKS.map(({ title, id }) => (
              <ListItem onClick={() => scrollTo(`#${title}`)} key={id}>
                {title}
              </ListItem>
            ))}
            <Box p="s40">
              <Typography textAlign="center" color="primary">
                Start The Quiz Now!
              </Typography>
              <Box>
                <GenderButtons />
              </Box>
            </Box>
          </FlexWrapper>
        </MobileCover>
      )}
      <FlexWrapper
        alignItems="center"
        justifyContent="space-around"
        height="100%"
      >
        <HomeLink />
        {checkoutPage ? (
          ""
        ) : (
          <FlexWrapper
            as="ul"
            gap="0.625rem"
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
          <Box>
            <QuizStartButton>Check Product</QuizStartButton>
          </Box>
        ) : (
          <BaseButton onClick={() => scrollTo(`#Check`)} width="8.5625rem">
            Start Quiz
          </BaseButton>
        )}
        {!checkoutPage && (
          <Box zIndex={30}>
            {mobileView ? (
              <MobileWrapper
                onClick={() => setMobileView(false)}
                z-index="300"
                display={{ _: "block", ltablet: "none" }}
              >
                <MobCross />
              </MobileWrapper>
            ) : (
              <MobileWrapper
                display={{ _: "block", ltablet: "none" }}
                onClick={() => setMobileView(true)}
              >
                <Mobnav />
              </MobileWrapper>
            )}
          </Box>
        )}
      </FlexWrapper>
    </Box>
  );
};

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  text-transform: uppercase;
`;
const MobileCover = styled(FlexWrapper)`
  background: ${theme.colors.orangelighter};
  color: white;
  font-size: ${theme.fontSizes.fs24};
  font-weight: ${theme.fontWeights.fw700};
  justify-content: center;
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: ${theme.zIndices.loader};

  @media (width: 1068px) {
    display: none !important;
  }
`;
const MobileWrapper = styled(Box)`
  cursor: pointer;
  display: ${({ display }) => display};
`;
