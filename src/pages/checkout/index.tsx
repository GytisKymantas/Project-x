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

//TODO:
import ScaleSection from "components/molecules/scaleSection/ScaleSection";

const Checkout: React.FC = () => (
  <>
    <Navigation checkoutPage />
    <CheckoutHero />
    <MeasurementsInfoContainer />
    <ScaleSection />
    <HealthInformationSection />
    <SubscriptionBoxSection />
    <Footer />
  </>
);

export default Checkout;
