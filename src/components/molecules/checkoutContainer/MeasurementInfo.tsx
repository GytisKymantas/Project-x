import React from "react";
import { Box, Image } from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { Gender } from "assets/images";

interface MeasurementsProps {
  title: string;
  subtitle: string;
  image: React.ReactNode;
}

export const MeasurementInfo: React.FC<MeasurementsProps> = ({
  title,
  subtitle,
  image,
}) => {
  console.log(title, "this is title");
  return (
    <Box bg="blue" width="250px">
      {image}
      <Box p="s20">
        <SectionHeader type="h3" header={title} paragraph={subtitle} />
      </Box>
    </Box>
  );
};
