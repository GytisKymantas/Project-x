import styled from "styled-components/macro";
import { Styles } from "./Box";
import { Theme } from "styles/theme";
import { flexbox } from "styled-system";
import { Box } from "./Box";

interface FlexWrapperProps {
  justifyContent?: string;
  flexDirection?: string;
  alignItems?: string;
  flexWrap?: string;
}
//TODO:FIX above
export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  gap: ${({ gap }) => gap};

  && {
    ${flexbox}
  }
`;
