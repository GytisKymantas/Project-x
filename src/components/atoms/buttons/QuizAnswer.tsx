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
  //TODO: delete ^
  return (
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
          boxShadow={disabled ? "" : "default"}
          disabled={disabled}
        >
          {children}
        </BaseButton>
      ) : (
        <BaseButton
          type="button"
          onClick={() => setSelect(!select)}
          background="graylight"
          border={border}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )}
    </Box>
  );
};
