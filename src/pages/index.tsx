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
import { CheckOutContainer } from "components/atoms/checkOut/CheckOutContainer";
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
