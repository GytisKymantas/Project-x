import React from "react";
import {
  BMI,
  CheckoutHero,
  Footer,
  HealthInformationSection,
  MeasurementsInfoContainer,
  MultipleChoiceResults,
  Navigation,
  SubscriptionBoxSection,
  ScaleSection,
} from "components";

const Checkout: React.FC = () => (
  <>
    <Navigation defaultPage />
    <CheckoutHero />
    <MeasurementsInfoContainer />
    <BMI />
    <ScaleSection />
    <HealthInformationSection />
    <MultipleChoiceResults />
    <SubscriptionBoxSection />
    <Footer />
  </>
);

export default Checkout;
