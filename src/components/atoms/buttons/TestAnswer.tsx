import React, { useState } from "react";
import { Box, FlexWrapper, BaseButton } from "components";
import { Check } from "assets/images";

interface QuizAnswerProps {
  children: React.ReactNode;
  id: number;
  isSelected: boolean;
  onClick?: () => void;
}

export const TestAnswer: React.FC<QuizAnswerProps> = ({
  children,
  onClick,
  isSelected,
  id,
}) => {
  return (
    <Box
      minWidth="22.5625rem"
      height="3rem"
      position={"relative"}
      m="s8"
      onClick={onClick}
    >
      {isSelected && id === 1 ? (
        <BaseButton
          type="button"
          background={"white"}
          border={"solid 2px black"}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      ) : (
        <BaseButton type="button" background={"white"} border={"solid 2px red"}>
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )}
    </Box>
  );
};
