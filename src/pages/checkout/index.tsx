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
} from "components";

const Checkout: React.FC = () => (
  <>
    <Navigation checkoutPage />
    <CheckoutHero />
    <MeasurementsInfoContainer />
    <BMI />
    <ScaleSection />
    <HealthInformationSection />
    <SubscriptionBoxSection />
    <Footer />
  </>
);

export default Checkout;
