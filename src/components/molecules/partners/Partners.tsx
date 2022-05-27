import React from "react";
import {
  SectionWrapper,
  GridWrapper,
  FlexWrapper,
  Image,
  SectionHeader,
} from "components";
import { PARTNER_IMAGES } from "constants/Constants";

export const Partners: React.FC = () => (
  <SectionWrapper id="Partners">
    <GridWrapper
      gap="s50"
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      margin={{ _: "sautos50", ltablet: "sautos100" }}
    >
      <FlexWrapper width="100%">
        <SectionHeader
          type="h3"
          header="Our Partners"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little gerret repair to desire he esteem"
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
