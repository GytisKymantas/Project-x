import React from "react";
import { Box, SectionHeader } from "components";

interface MeasurementsProps {
  title: number | boolean;
  subtitle: string;
  image: React.ReactNode;
  imperialSubtitle?: string;
  feet?: number;
  inches?: number;
}

export const MeasurementCard: React.FC<MeasurementsProps> = ({
  title,
  subtitle,
  image,
  imperialSubtitle,
  feet,
  inches,
}) => (
  <Box
    minWidth="12.5rem"
    p="s20"
    boxShadow="grayshadowintense"
    borderRadius="br24"
  >
    <Box margin="s0auto" width="3.125rem">
      {image}
    </Box>
    {feet ? (
      <Box p="s20" m="s16">
        <SectionHeader
          type="h3"
          header={`${feet}'${inches}"`}
          paragraph={imperialSubtitle}
        />
      </Box>
    ) : (
      <Box m="s16" p="s20">
        <SectionHeader type="h3" header={title} paragraph={subtitle} />
      </Box>
    )}
  </Box>
);
