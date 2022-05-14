import React, { useState } from "react";
import { Box, FlexWrapper, BaseButton } from "components";
import { Check } from "assets/images";

interface QuizAnswerProps {
  children: React.ReactNode;
  isSubmit?: boolean;
  id: number;
  isSelected: boolean;
  onClick?: () => void;
}

export const TestAnswer: React.FC<QuizAnswerProps> = ({
  children,
  isSubmit,
  onClick,
  isSelected,
  id,
}) => {
  console.log(id, "Test answer");
  const [state, setState] = useState(1);
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
        <BaseButton
          type="button"
          // display="none"
          background={"white"}
          border={"solid 2px red"}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )}
      {/* {isSelected && id === 2 ? (
        <BaseButton
          type="button"
          background={"white"}
          border={"solid 2px black"}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      ) : (
        <BaseButton
          type="button"
          background={"white"}
          border={"solid 2px transparent"}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )} */}
    </Box>
  );
};

{
  /* {select && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )} */
}
