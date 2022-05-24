import React from "react";
import {
  Navigation,
  HeroSection,
  QuestionsCardContainer,
  Review,
  About,
  Partners,
  Footer,
} from "components";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <HeroSection />
    <QuestionsCardContainer />
    <Review />
    <Partners />
    <About />
    <Footer />
  </>
);
export default Landing;
