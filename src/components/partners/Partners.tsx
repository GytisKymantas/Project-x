import React from "react";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { SectionWrapper, GridWrapper, FlexWrapper, Image } from "components";

export const Partners: React.FC = () => (
  <SectionWrapper id="partners">
    <GridWrapper
      gap={{ _: "50px", ltablet: "0" }}
      gridTemplateColumns={{ _: "1fr", ltablet: "repeat(2,1fr)" }}
      margin={{ _: "auto 50px", ltablet: "auto 100px" }}
    >
      <FlexWrapper width="100%">
        <SectionHeader
          type="h3"
          header="Our Partners"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little gerret repair to desire he esteem"
        />
      </FlexWrapper>
      <FlexWrapper flexWrap="wrap" justifyContent="center">
        <Image src="partner1" width="150px" />
        <Image src="partner2" width="150px" />
        <Image src="partner1" width="150px" />
        <Image src="partner4" width="150px" />
        <Image src="partner5" width="150px" />
      </FlexWrapper>
    </GridWrapper>
  </SectionWrapper>
);
