import React from "react";
import { Box, Image, SectionHeader } from "components";

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
}) => (
  <Box bg="white" minWidth="200px" p="1.25rem" boxShadow="default">
    <Box margin="s0auto" width="3.125rem">
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
