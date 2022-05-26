import React from "react";
import {
  Navigation,
  HeroSection,
  QuestionsCardContainer,
  ReviewContainer,
  About,
  Partners,
  Footer,
} from "components";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <HeroSection />
    <QuestionsCardContainer />
    <ReviewContainer />
    <Partners />
    <About />
    <Footer />
  </>
);
export default Landing;
