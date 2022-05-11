import React from "react";
import { BaseButton, Box } from "components";

interface QuizStartButtonProps {
  children: React.ReactNode;
}

export const QuizStartButton: React.FC<QuizStartButtonProps> = ({
  children,
}) => (
  <Box width={"137px"} height={"48px"} borderRadius="br14">
    <BaseButton
      //   boxShadow={"0px 16px 32px rgba(16, 51, 251, 0.24)"};
      background={"rgba(16, 51, 251, 0.24)"}
      type="button"
    >
      {children}
    </BaseButton>
  </Box>
);
