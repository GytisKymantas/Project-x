import React, { useState } from "react";
import { Box, FlexWrapper, BaseButton } from "components";

interface QuizAnswerProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  disabled?: boolean;
  border?: string;

  onClick?: () => void;
}

export const QuizAnswer: React.FC<QuizAnswerProps> = ({
  children,
  isSubmit,
  disabled,
  border,
  onClick,
}) => {
  const [select, setSelect] = useState(false);
  return (
    <Box
      minWidth="22.5625rem"
      height="3rem"
      position={"relative"}
      m={isSubmit ? "s50" : "s8"}
      onClick={onClick}
    >
      {isSubmit ? (
        <BaseButton
          type="submit"
          boxShadow={disabled ? "" : "0px 16px 32px rgba(16, 51, 251, 0.24);"}
          disabled={disabled}
        >
          Submit
        </BaseButton>
      ) : (
        <BaseButton
          type="button"
          onClick={() => setSelect(!select)}
          background={"white"}
          border={border}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )}
    </Box>
  );
};
