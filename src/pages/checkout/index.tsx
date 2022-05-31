import React from "react";
import {
  Footer,
  Navigation,
  HealthInformationSection,
  MeasurementsInfoContainer,
  SubscriptionBoxSection,
  ScaleSection,
  BMI,
  CheckoutHero,
  // MultipleChoiceResults,
} from "components";

const Checkout: React.FC = () => (
  <>
    <Navigation defaultPage />
    <CheckoutHero />
    <MeasurementsInfoContainer />
    <BMI />
    <ScaleSection />
    <HealthInformationSection />
    {/* <MultipleChoiceResults /> */}
    <SubscriptionBoxSection />
    <Footer />
  </>
);

export default Checkout;
