import React from "react";
import {
  About,
  CheckOutContainer,
  Footer,
  HeroSection,
  Navigation,
  Partners,
  QuestionsCardContainer,
  ReviewContainer,
} from "components";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <HeroSection />
    <QuestionsCardContainer />
    <ReviewContainer />
    <Partners />
    <About />
    <CheckOutContainer />
    <Footer />
  </>
);
export default Landing;
