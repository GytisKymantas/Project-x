import React from "react";
import { FlexWrapper, SectionHeader, GenderButtons } from "components";

export const CheckOut: React.FC = () => (
  <FlexWrapper flexDirection="column" justifyContent="center" maxHeight="23rem">
    <SectionHeader
      center
      type="h3"
      header="Check It Out!"
      paragraph="Take a quick survey with our quiz to determine your personal Fitness needs! My little garret repair to desire he esteem."
    />
    <FlexWrapper justifyContent="center">
      <GenderButtons />
    </FlexWrapper>
  </FlexWrapper>
);
