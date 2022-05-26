import React from "react";
import { FlexWrapper, SectionHeader, GenderButtons } from "components";

export const CheckOut: React.FC = () => (
  <FlexWrapper flexDirection="column" justifyContent="center" maxHeight="23rem">
    <SectionHeader
      center
      type="h3"
      header="Check It Out"
      paragraph="Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem."
    />
    <FlexWrapper justifyContent="center">
      <GenderButtons />
    </FlexWrapper>
  </FlexWrapper>
);
