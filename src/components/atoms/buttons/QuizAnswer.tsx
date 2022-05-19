import React, { useState } from "react";
import { Box, FlexWrapper, BaseButton } from "components";
import { Check } from "assets/images";

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
      m="s8"
      onClick={onClick}
    >
      {isSubmit ? (
        <BaseButton
          type="submit"
          background={"blue"}
          boxShadow="0px 16px 32px rgba(16, 51, 251, 0.24);"
          mt="s50"
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
      {/* {id === 1 && (
        <Box border={isSelected ? "solid 2px black" : "solid 2px transparent"}>
          bam
        </Box>
      )}
      {
        <Box border={isSelected ? "solid 2px black" : "solid 2px transparent"}>
          Bum
        </Box>
      } */}
      {/* {select && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )} */}
    </Box>
  );
};
