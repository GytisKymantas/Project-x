import React from "react";
import { theme } from "styles/theme";
import { Box, FlexWrapper, BaseButton } from "components";

interface QuizAnswerProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  disabled?: boolean;
  border?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({
  children,
  isSubmit,
  disabled,
  border,
  onClick,
}) => (
  <Box
    minWidth="22.5625rem"
    height="3rem"
    position={"relative"}
    m={isSubmit ? "s8" : "s8"}
    onClick={onClick}
  >
    {isSubmit ? (
      <BaseButton
        type="submit"
        boxShadow={disabled ? "" : `${theme.shadows.default}`}
        disabled={disabled}
      >
        {children}
      </BaseButton>
    ) : (
      <BaseButton type="button" background="graylight" border={border}>
        <FlexWrapper justifyContent="center">{children}</FlexWrapper>
      </BaseButton>
    )}
  </Box>
);
