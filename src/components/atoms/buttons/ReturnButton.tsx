import React from "react";
import { BaseButton, FlexWrapper } from "components";
import { Arrow } from "assets/images";

interface ReturnButtonProps {
  onClick?: () => void;
  width?: string;
}
export const ReturnButton: React.FC<ReturnButtonProps> = ({
  onClick,
  width,
}) => (
  <FlexWrapper justifyContent="center" gap="0.625rem" mb="s30">
    <BaseButton
      background="transparent"
      width={width}
      onClick={onClick}
      type="button"
    >
      <Arrow />
    </BaseButton>
  </FlexWrapper>
);
