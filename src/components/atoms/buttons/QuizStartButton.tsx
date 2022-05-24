import React from "react";
import { BaseButton, Box } from "components";

interface QuizStartButtonProps {
  children: React.ReactNode;
  width?: String;
  onClick?: () => void;
}

export const QuizStartButton: React.FC<QuizStartButtonProps> = ({
  children,
  width,
  onClick,
}) => (
  <Box borderRadius="br14" height="3rem" onClick={() => onClick} width={width}>
    <BaseButton background={"taxi"} type="button">
      {children}
    </BaseButton>
  </Box>
);
