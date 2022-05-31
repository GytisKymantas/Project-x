import styled from "styled-components/macro";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { flexbox } from "styled-system";
import { Box } from "components";

interface FlexWrapperProps {
  alignItems?: string;
  flexWrap?: string;
  justifyContent?: string;
  flexDirection?: string;
}
export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  gap: ${({ gap }) => gap};

  && {
    ${flexbox}
  }
`;
