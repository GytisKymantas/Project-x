import React from "react";
import { BaseButton, FlexWrapper } from "components";
import { Arrow } from "assets/images";

interface ReturnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: String;
}

export const ReturnButton: React.FC<ReturnButtonProps> = ({
  children,
  onClick,
  width,
}) => (
  <FlexWrapper justifyContent="center" gap="10px" mt="20px">
    <BaseButton
      background={"taxi"}
      width={width}
      onClick={onClick}
      type="button"
    >
      <FlexWrapper justifyContent="center" gap="6px">
        <Arrow />
        {children}
      </FlexWrapper>
    </BaseButton>
  </FlexWrapper>
);
