import React from "react";
import { BMI } from "components/checkoutContainer/BMI";
import { CaloricCounter } from "components/checkoutContainer/CaloricCounter";
import { Variations } from "components/checkoutContainer/Variations";
import { Satisfaction } from "components/checkoutContainer/Satisfaction";
import { MeasurementInfo } from "components/checkoutContainer/MeasurementInfo";

const question: React.FC = () => {
  return (
    <div>
      <BMI answer={22} />
      <CaloricCounter calories={1450} />
      <Variations />
      <Satisfaction />
      <MeasurementInfo title="Male" subtitle="gender" />
    </div>
  );
};

export default question;
