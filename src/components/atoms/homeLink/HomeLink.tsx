import React from "react";
import { Box } from "components";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { Link } from "gatsby";

export const HomeLink: React.FC = () => (
  <Box>
    {" "}
    <Homelink to="/">
      Fit<span> </span>
      on<span style={{ color: `${theme.colors.orange}` }}>-</span>Time
    </Homelink>
  </Box>
);

const Homelink = styled(Link)`
  color: ${theme.colors.primary};
  font-family: "Satisfy", cursive;
  font-size: ${theme.fontSizes.fs32};
  text-decoration: none;
`;
