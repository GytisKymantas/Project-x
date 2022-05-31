import React, { useState } from "react";
import {
  Box,
  FlexWrapper,
  HomeLink,
  BaseButton,
  Typography,
  GenderButtons,
} from "components";
import { theme } from "styles/theme";
import styled from "styled-components/macro";
import scrollTo from "gatsby-plugin-smoothscroll";
import { NAVIGATION_LINKS } from "constants/Constants";
import { Mobnav, MobCross } from "assets/images";

interface NavigationProps {
  defaultPage?: boolean;
  successPage?: boolean;
}

//TODO: fix weight values,
// TODO: fix FAQ cursor
//TODO: fix About page
// TODO fix navigation display on success has to be unique
//TODO fix success page to be more pleasant,

export const Navigation: React.FC<NavigationProps> = ({
  defaultPage,
  successPage,
}) => {
  const [fix, setFix] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const handleScrollY = () => {
    if (window.scrollY >= 780) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", handleScrollY);

  return (
    <Box
      as="header"
      backgroundColor="white"
      boxShadow="grayshadow"
      height="10vh"
      position={fix ? "fixed" : "initial"}
      width="100%"
      zIndex="loader"
    >
      {mobileView && (
        <MobileCover>
          <FlexWrapper
            alignItems="center"
            flexDirection="column"
            gap="1.25rem"
            justifyContent="center"
          >
            {NAVIGATION_LINKS.map(({ id, title }) => (
              <ListItem onClick={() => scrollTo(`#${title}`)} key={id}>
                {title}
              </ListItem>
            ))}
            <Box p="s40">
              <Typography color="primary" textAlign="center">
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
        height="100%"
        justifyContent="space-around"
      >
        <HomeLink />
        {defaultPage ? (
          ""
        ) : (
          <FlexWrapper
            as="ul"
            display={{ _: "none", ltablet: "flex" }}
            gap="0.625rem"
          >
            {NAVIGATION_LINKS.map(({ id, title }) => (
              <ListItem onClick={() => scrollTo(`#${title}`)} key={id}>
                {title}
              </ListItem>
            ))}
          </FlexWrapper>
        )}
        {defaultPage ? (
          <Box display={successPage ? "none" : "block"}>
            <BaseButton onClick={() => scrollTo(`#Plans`)}>
              Check Product
            </BaseButton>
          </Box>
        ) : (
          <BaseButton onClick={() => scrollTo(`#Check`)} width="8.5625rem">
            Start Quiz
          </BaseButton>
        )}

        {!defaultPage && (
          <>
            {mobileView ? (
              <Box zIndex="master">
                <MobileWrapper
                  display={{ _: "block", ltablet: "none" }}
                  onClick={() => setMobileView(false)}
                  zIndex="overall"
                >
                  <MobCross />
                </MobileWrapper>
              </Box>
            ) : (
              <Box display={{ _: "block", ltablet: "none" }} zIndex="master">
                <MobileWrapper
                  display={{ _: "block", ltablet: "none" }}
                  onClick={() => setMobileView(true)}
                >
                  <Mobnav />
                </MobileWrapper>
              </Box>
            )}
          </>
        )}
      </FlexWrapper>
    </Box>
  );
};

const ListItem = styled.li`
  cursor: pointer;
  font-weight: 700;
  list-style-type: none;
  text-transform: uppercase;
`;
const MobileCover = styled(FlexWrapper)`
  background: ${theme.colors.orangelighter};
  color: ${theme.colors.white};
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
