import styled from "styled-components/macro";
import { grid, GridProps } from "styled-system";
import { FlexWrapper } from "components";
import { Theme } from "styles/theme";

export const GridWrapper = styled(FlexWrapper)<GridProps<Theme>>`
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  display: grid;
  gap: ${({ gap }) => gap};

  && {
    ${grid}
  }
`;
