import React from "react";
import { Box } from "components";
import { StaticImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <Box>
      bam
      <StaticImage
        src="src/assets/images/joerogan.png"
        alt="studenciukai"
        placeholder="tracedSVG"
        draggable="false"
      />
    </Box>
  );
};
export default index;
