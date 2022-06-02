import React from "react";
import {
  Box,
  GridWrapper,
  MeasurementCard,
  SectionWrapper,
  Typography,
} from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Gender, Height, Scales, Age } from "assets/images";

export const MeasurementsInfoContainer: React.FC = () => {
  const userData = useSelector(selectUserData);
  const age = userData?.age;
  const feet = userData?.feet;
  const height = userData?.height;
  const isMale = userData?.isMale;
  const inches = userData?.inches;
  const weight = userData?.weight;

  const MEASUREMENT_CONTAINER_DATA = [
    {
      id: "1",
      image: <Gender />,
      subtitle: "Gender",
      title: isMale as unknown as string,
    },
    {
      id: "2",
      image: <Age />,
      subtitle: "Age",
      title: age as unknown as string,
    },
    {
      feet: feet,
      id: "3",
      image: <Height />,
      inches: inches,
      imperialSubtitle: "Height ft",
      subtitle: "Height cm",
      title: height as unknown as string,
    },
    {
      id: "4",
      image: <Scales />,
      subtitle: "Weight",
      title: weight as unknown as string,
    },
  ];

  return (
    <SectionWrapper>
      <Box m={{ _: "s20", ltablet: "s50" }}>
        <Typography color="primary" fontWeight="fw700" textAlign="center">
          Your summary:
        </Typography>
      </Box>
      <GridWrapper
        gap="1.25rem"
        gridTemplateColumns={{
          _: "repeat(1,1fr)",
          ltablet: "repeat(4,1fr)",
        }}
        maxWidth="71.875rem"
        m="s0auto"
        p={{ _: "s32", ltablet: "s0" }}
      >
        {MEASUREMENT_CONTAINER_DATA.map(
          ({ feet, inches, imperialSubtitle, id, image, subtitle, title }) => (
            <MeasurementCard
              feet={feet}
              image={image}
              inches={inches}
              imperialSubtitle={imperialSubtitle}
              key={id}
              subtitle={subtitle}
              title={title}
            />
          )
        )}
      </GridWrapper>
    </SectionWrapper>
  );
};
