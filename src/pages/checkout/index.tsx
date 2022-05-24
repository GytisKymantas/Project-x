import React from "react";
import {
  Footer,
  Navigation,
  HealthInformationSection,
  MeasurementsInfoContainer,
  SubscriptionBoxSection,
  // ScaleSection,
  CheckoutHero,
} from "components";
import { BMI } from "components/atoms/BMI/BMI";
//TODO:
import ScaleSection from "components/molecules/scaleSection/ScaleSection";

const Checkout: React.FC = () => (
  <>
    <Navigation checkoutPage />
    <CheckoutHero />
    <BMI />
    <MeasurementsInfoContainer />
    <ScaleSection />
    <HealthInformationSection />
    <SubscriptionBoxSection />
    <Footer />
  </>
);

export default Checkout;
