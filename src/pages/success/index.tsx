import React from "react";
import { Navigation, Footer, OrderSummaryContainer } from "components";

const Success: React.FC = () => (
  <>
    <Navigation defaultPage successPage />
    <OrderSummaryContainer />
    <Footer />
  </>
);

export default Success;
