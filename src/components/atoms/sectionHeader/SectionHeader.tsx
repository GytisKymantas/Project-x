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
      flexDirection="column"
      gap="1.25rem"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        type={type}
        color="primary"
        textAlign={center ? "center" : "start"}
      >
        {header}
      </Typography>
      <Typography textAlign={center ? "center" : "start"} color="gray">
        {paragraph}
      </Typography>
    </FlexWrapper>
  </Box>
);
