import React from "react";
import styled from "styled-components/macro";
import LazyLoad from "react-lazyload";
import { mobile } from "styles/breakpoints";
import { Visuals, visuals } from "utils/visuals";

interface Styles {
  borderRadius?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  height?: string;
  width?: string;
}

interface ImageProps extends Styles {
  alt?: string;
  mobile_src?: Visuals;
  onClick?: () => void;
  src: Visuals;
}

const Img = styled.img<Styles>`
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  height: ${({ height }) => height || ""};
  margin: ${({ margin }) => margin || ""};
  max-width: ${({ maxWidth }) => maxWidth || ""};
  max-height: ${({ maxHeight }) => maxHeight || ""};
  width: ${({ width }) => width || ""};
`;

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  mobile_src,
  onClick,
  ...rest
}) => {
  return (
    <LazyLoad height={200}>
      <picture onClick={onClick}>
        {mobile_src && <source media={mobile} srcSet={visuals[mobile_src]} />}
        <Img src={visuals[src]} alt={alt} {...rest} />
      </picture>
    </LazyLoad>
  );
};
