import React from "react";
import {
  Navigation,
  HeroSection,
  QuestionsCardContainer,
  ReviewContainer,
  About,
  Partners,
  Footer,
  CheckOutContainer,
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
