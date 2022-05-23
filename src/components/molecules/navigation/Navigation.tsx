import { Box, FlexWrapper, HomeLink } from "components";
import { QuizStartButton } from "components/atoms/buttons/QuizStartButton";
import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { theme } from "styles/theme";
import scrollTo from "gatsby-plugin-smoothscroll";
import { navigate } from "gatsby";
import { NAVIGATION_LINKS } from "constants/Constants";
import { Mobnav } from "assets/images";
import { BaseButton } from "components/atoms/buttons/elements/BaseButton";
import { GenderButtons } from "components/atoms/genderButtons/GenderButtons";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";

interface NavigationProps {
  checkoutPage?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ checkoutPage }) => {
  const [fix, setFix] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleQuizStart = () => {
    navigate("/questions/female");
  };
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
      {/* {popup && (
        <QuizPopup bg="taxi">
          <FlexWrapper>
            <SectionHeader
              type="h2"
              header="Begin the quiz"
              paragraph="give your details"
            />
            <Box onClick={() => setPopup(!popup)}>X</Box>
          </FlexWrapper>
          <FlexWrapper justifyContent="center">
            <GenderButtons />
          </FlexWrapper>
        </QuizPopup>
      )} */}
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
          <BaseButton
            onClick={() => setPopup(!popup)}
            width="8.5625rem"
            zIndex={5}
          >
            Start Quiz
          </BaseButton>
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

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: none;
`;
const QuizPopup = styled(Box)`
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 5;
  opacity: 90%;
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
