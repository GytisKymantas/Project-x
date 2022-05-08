import React, { useState } from "react";
import { Box, FlexWrapper, BaseButton } from "components";
import { Check } from "assets/images";

interface QuizButtonProps {
  children: React.ReactNode;
  isSubmit?: boolean;
}

export const QuizButton: React.FC<QuizButtonProps> = ({
  children,
  isSubmit,
}) => {
  const [select, setSelect] = useState(false);
  return (
    <Box
      bg="white"
      minWidth="22.5625rem"
      height="3rem"
      position={"relative"}
      m="s8"
    >
      {isSubmit ? (
        <BaseButton
          type="submit"
          background="blue"
          boxShadow="0px 16px 32px rgba(16, 51, 251, 0.24);"
          mt="s50"
        >
          Submit
        </BaseButton>
      ) : (
        <BaseButton
          type="button"
          onClick={() => setSelect(!select)}
          border={select ? "solid 2px black" : "solid 2px transparent"}
        >
          <FlexWrapper justifyContent="center">{children}</FlexWrapper>
        </BaseButton>
      )}

      {select && (
        <Box position={"absolute"} top="28%" left="5%">
          <Check />
        </Box>
      )}
    </Box>
  );
};
