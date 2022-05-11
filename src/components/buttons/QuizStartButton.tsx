import React from "react";
import { BaseButton, Box } from "components";

interface QuizStartButtonProps {
  children: React.ReactNode;
}

export const QuizStartButton: React.FC<QuizStartButtonProps> = ({
  children,
}) => (
  <Box width={"137px"} height={"48px"} borderRadius="br14">
    <BaseButton background={"taxi"} type="button">
      {children}
    </BaseButton>
  </Box>
);
