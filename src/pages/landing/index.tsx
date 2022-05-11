import React from "react";
import { Navigation } from "components/navigation/Navigation";
import { HeroSection } from "components/heroContainer/HeroSection";
import { QuestionsCardContainer } from "components/FAQ/QuestionsCardContainer";
import { Review } from "components/testimonials/Review";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <HeroSection />
    <QuestionsCardContainer />
    <Review />
  </>
);
export default Landing;
