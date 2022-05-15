import React from "react";
import { MeasurementInfo } from "./MeasurementInfo";
import { Box, SectionWrapper, GridWrapper } from "components";
import { MEASUREMENT_CONTAINER_DATA } from "constants/Constants";

import { Gender, Height, Scales, Age } from "assets/images";

const MeasurementsInfoContainer = () => {
  return (
    <SectionWrapper>
      <GridWrapper gridTemplateColumns="repeat(4,1fr)" my="10rem" gap="20px">
        {MEASUREMENT_CONTAINER_DATA.map(({ id, image, title, subtitle }) => (
          <MeasurementInfo
            key={id}
            title={title}
            subtitle={subtitle}
            image={image}
          />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default MeasurementsInfoContainer;
