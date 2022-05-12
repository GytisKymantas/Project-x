import React from "react";
import { BaseButton, Box } from "components";
import { StringifyOptions } from "querystring";

interface QuizStartButtonProps {
  children: React.ReactNode;
  width?: String;
}

export const QuizStartButton: React.FC<QuizStartButtonProps> = ({
  children,
  width,
}) => (
  <Box borderRadius="br14" height="48px" width={width}>
    <BaseButton background={"taxi"} type="button">
      {children}
    </BaseButton>
  </Box>
);

// width={"137px"}
