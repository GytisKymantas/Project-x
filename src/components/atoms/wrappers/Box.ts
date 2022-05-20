import styled from "styled-components/macro";
import { Theme } from "styles/theme";
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

const boxProps = compose(
  space,
  color,
  display,
  position,
  zIndex,
  layout,
  border,
  shadow,
  textAlign
);

export interface Styles<T>
  extends BorderProps<T>,
    ColorProps<T>,
    PositionProps<T>,
    ZIndexProps<T>,
    DisplayProps<T>,
    BoxShadowProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TextAlignProps<T>,
    SpaceProps<T> {
  gap?: string;
  fixed?: string;
}

export const Box = styled.div<Styles<Theme>>`
  position: ${({ fixed }) => fixed || ""};

  && {
    ${boxProps};
  }
`;
