import styled from "styled-components/macro";
import { compose, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Theme } from "styles/theme";

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
  extends SpaceProps<Theme>,
    LayoutProps<Theme> {
  background?: string;
  boxShadow?: string;
  border?: string;
  cursor?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export type ButtonStyles = Pick<
  DefaultButtonProps,
  | "margin"
  | "width"
  | "padding"
  | "border"
  | "background"
  | "boxShadow"
  | "cursor"
>;

export const BaseButton = styled.button<ButtonStyles>`
  border-style: none;
  border-radius: 24px;
  border: ${({ border }) => border};
  background-color: ${({ background }) => background || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  cursor: pointer;
  display: block;
  height: 100%;
  padding: ${({ padding }) => padding || "0.5rem 1rem"};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.fw700};

  &:hover {
    background: orange;
  }

  &:active {
    filter: brightness(110%);
  }

  && {
    ${defaultButtonProps}
  }
`;