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
    height="3rem"
    m={isSubmit ? "s8" : "s8"}
    onClick={onClick}
    position={"relative"}
  >
    {isSubmit ? (
      <BaseButton
        boxShadow={disabled ? "" : `${theme.shadows.default}`}
        disabled={disabled}
        type="submit"
        minWidth={{ _: "17.5rem", ltablet: "20.625rem" }}
      >
        {children}
      </BaseButton>
    ) : (
      <BaseButton
        background="graylight"
        border={border}
        minWidth={{ _: "20.5625rem", ltablet: "22.5625rem" }}
        type="button"
      >
        <FlexWrapper justifyContent="center">{children}</FlexWrapper>
      </BaseButton>
    )}
  </Box>
);
