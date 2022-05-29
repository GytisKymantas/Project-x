import React from "react";
import { Navigation, Footer, OrderSummaryContainer } from "components";

const success: React.FC = () => (
  <>
    <Navigation defaultPage successPage />
    <OrderSummaryContainer />
    <Footer />
  </>
);

export default success;
