import React from "react";
import { FlexWrapper, Typography } from "components";
export type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body16"
  | "caption12"
  | "span";

interface SectionHeaderProps {
  header: string;
  paragraph?: string;
  type?: TextType;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  header,
  paragraph,
  type,
  center,
}) => (
  <>
    <FlexWrapper
      flexDirection="column"
      gap="1.25rem"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        type={type}
        color="primary"
        textAlign={center ? "center" : "default"}
      >
        {header}
      </Typography>
      <Typography color="gray">{paragraph}</Typography>
    </FlexWrapper>
  </>
);
