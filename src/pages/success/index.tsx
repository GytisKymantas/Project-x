import React from "react";
import { Footer, Navigation, OrderSummaryContainer } from "components";

const Success: React.FC = () => (
  <>
    <Navigation defaultPage successPage />
    <OrderSummaryContainer />
    <Footer />
  </>
);

export default Success;
