import React from "react";
import { Navigation } from "components/molecules/navigation/Navigation";
import { HeroSection } from "components/molecules/heroContainer/HeroSection";
import { QuestionsCardContainer } from "components/molecules/FAQ/QuestionsCardContainer";
import { Review } from "components/atoms/reviewCard/Review";
import { About } from "components/molecules/about/About";
import { Partners } from "components/molecules/partners/Partners";
import { Footer } from "components/molecules/footer/Footer";

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
