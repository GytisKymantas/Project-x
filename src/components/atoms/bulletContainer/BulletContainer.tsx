import React from "react";
import { FlexWrapper } from "components";

interface BulletContainerProps {
  index: number;
}

export const BulletContainer: React.FC<BulletContainerProps> = ({ index }) => {
  return <FlexWrapper justifyContent="center">{index}</FlexWrapper>;
};
