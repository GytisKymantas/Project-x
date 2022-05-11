import React from "react";
import { Navigation } from "components/navigation/Navigation";
import { HeroSection } from "components/heroContainer/HeroSection";
import { QuestionsCardContainer } from "components/FAQ/QuestionsCardContainer";

const Landing: React.FC = () => (
  <>
    <Navigation />
    <HeroSection />
    <QuestionsCardContainer />
  </>
);
export default Landing;
