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
  return (
    <Box bg="blue" width="100%" p="20px">
      <Box margin="0 auto" width="50px">
        {image}
      </Box>
      <Box p="s20">
        <SectionHeader type="h3" header={title} paragraph={subtitle} />
      </Box>
    </Box>
  );
};
