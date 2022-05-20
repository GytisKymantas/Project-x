import React from "react";
import { Box, Image } from "components";
import { SectionHeader } from "components/atoms/sectionHeader/SectionHeader";
import { Gender } from "assets/images";

interface MeasurementsProps {
  title: string;
  subtitle: string;
  image: React.ReactNode;
  imperialSubtitle?: string;
  feet?: number;
  inches?: number;
}

export const MeasurementInfo: React.FC<MeasurementsProps> = ({
  title,
  subtitle,
  image,
  imperialSubtitle,
  feet,
  inches,
}) => {
  return (
    <Box bg="blue" width="100%" p="20px">
      <Box margin="s0auto" width="50px">
        {image}
      </Box>
      {feet ? (
        <Box p="s20">
          <SectionHeader
            type="h3"
            header={`${feet}'${inches}"`}
            paragraph={imperialSubtitle}
          />
        </Box>
      ) : (
        <Box p="s20">
          <SectionHeader type="h3" header={title} paragraph={subtitle} />
        </Box>
      )}
    </Box>
  );
};
