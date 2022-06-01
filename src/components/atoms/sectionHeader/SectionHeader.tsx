import React from "react";
import { FlexWrapper, Typography, Box } from "components";

interface SectionHeaderProps {
  header: string | number | boolean;
  paragraph?: string;
  type?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body16"
    | "caption12"
    | "span";
  center?: boolean;
}
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  header,
  paragraph,
  type,
  center,
}) => (
  <Box>
    <FlexWrapper
      alignItems="center"
      flexDirection="column"
      gap="1.25rem"
      justifyContent="center"
    >
      <Typography
        type={type}
        color="primary"
        textAlign={center ? "center" : "justify"}
      >
        {header}
      </Typography>
      <Typography textAlign={center ? "center" : "justify"} color="gray">
        {paragraph}
      </Typography>
    </FlexWrapper>
  </Box>
);
