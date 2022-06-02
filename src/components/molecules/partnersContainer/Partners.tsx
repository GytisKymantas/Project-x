import React from "react";
import {
  FlexWrapper,
  GridWrapper,
  Image,
  SectionWrapper,
  SectionHeader,
} from "components";
import { PARTNER_IMAGES } from "constants/Constants";

export const Partners: React.FC = () => (
  <SectionWrapper id="Partners">
    <GridWrapper
      gap="3.125rem"
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      margin="s50"
    >
      <FlexWrapper width="100%">
        <SectionHeader
          center
          header="Our Partners"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little gerret repair to desire he esteem"
          type="h3"
        />
      </FlexWrapper>
      <FlexWrapper flexWrap="wrap" justifyContent="center">
        {PARTNER_IMAGES.map((image) => (
          <Image key={image} src={image} width="9.375rem" />
        ))}
      </FlexWrapper>
    </GridWrapper>
  </SectionWrapper>
);
