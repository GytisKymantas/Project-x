import React from "react";
import { FlexWrapper } from "components";
import { Bullet, BulletBlank } from "assets/images";

interface BulletContainerProps {
  index: number;
}

export const BulletContainer: React.FC<BulletContainerProps> = ({ index }) => {
  return (
    <FlexWrapper justifyContent="center">
      {index}
      {/* <Bullet />
      <BulletBlank />
      <BulletBlank /> */}
    </FlexWrapper>
  );
};
