import React from "react";
import { BaseButton, FlexWrapper } from "components";
import { Arrow } from "assets/images";

interface ReturnButtonProps {
  onClick?: () => void;
  width?: String;
}
//TODO:check if width is viable?
export const ReturnButton: React.FC<ReturnButtonProps> = ({
  onClick,
  width,
}) => (
  <FlexWrapper justifyContent="center" gap="0.625rem" mb="30px">
    <BaseButton
      background={"taxi"}
      width={width}
      onClick={onClick}
      type="button"
    >
      <Arrow />
    </BaseButton>
  </FlexWrapper>
);
