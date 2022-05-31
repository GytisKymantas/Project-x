import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import { Colors } from "styles/theme";

interface SectionWrapperStyles {
  backgroundColor?: Colors;
  minHeight?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};
  min-height: ${({ minHeight }) => minHeight || ""};
  position: relative;
  padding: 3rem 0;

  @media ${mobile} {
    padding: 2rem 0;
  }
`;
