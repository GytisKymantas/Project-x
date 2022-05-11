import React from "react";
import { Navigation } from "components/navigation/Navigation";
import { HeroSection } from "components/heroContainer/HeroSection";
import { QuestionsCardContainer } from "components/FAQ/QuestionsCardContainer";
import { Review } from "components/testimonials/Review";
import { About } from "components/about/About";
import { Partners } from "components/partners/Partners";
import { Footer } from "components/footer/Footer";

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
