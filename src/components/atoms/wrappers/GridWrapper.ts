import styled from "styled-components/macro";
import { grid, GridProps } from "styled-system";
import { Box } from "./Box";
import { Theme } from "styles/theme";

export const GridWrapper = styled(Box)<GridProps<Theme>>`
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  display: grid;
  gap: ${({ gap }) => gap};

  && {
    ${grid}
  }
`;
