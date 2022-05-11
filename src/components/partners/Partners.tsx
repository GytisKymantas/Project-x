import React from "react";
import { SectionHeader } from "components/sectionHeader/SectionHeader";
import { SectionWrapper, GridWrapper, FlexWrapper, Image } from "components";

export const Partners: React.FC = () => (
  <SectionWrapper>
    <GridWrapper gridTemplateColumns="repeat(2,1fr)" margin="auto 100px">
      <FlexWrapper width="600px">
        <SectionHeader
          type="h3"
          header="Our Partners"
          paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little gerret repair to desire he esteem"
        />
      </FlexWrapper>
      <FlexWrapper flexWrap="wrap">
        <Image src="partner1" width="150px" />
        <Image src="partner2" width="150px" />
        <Image src="partner1" width="150px" />
        <Image src="partner4" width="150px" />
        <Image src="partner5" width="150px" />
      </FlexWrapper>
    </GridWrapper>
  </SectionWrapper>
);
