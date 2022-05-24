import React from "react";
import { BaseButton, FlexWrapper } from "components";
import { Arrow } from "assets/images";

interface ReturnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: String;
}
//TODO:check if width is viable?
export const ReturnButton: React.FC<ReturnButtonProps> = ({
  children,
  onClick,
  width,
}) => (
  <FlexWrapper justifyContent="center" gap="0.625rem" mt="s20">
    <BaseButton
      background={"taxi"}
      width={width}
      onClick={onClick}
      type="button"
    >
      <FlexWrapper justifyContent="center" gap="0.375rem">
        <Arrow />
        {children}
      </FlexWrapper>
    </BaseButton>
  </FlexWrapper>
);
