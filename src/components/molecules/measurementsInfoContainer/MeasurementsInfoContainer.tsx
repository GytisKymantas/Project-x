import React from "react";
import { SectionWrapper, GridWrapper, MeasurementInfo } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
import { Gender, Height, Scales, Age } from "assets/images";

export const MeasurementsInfoContainer: React.FC = () => {
  const userData = useSelector(selectUserData);
  const age = userData.age;
  const height = userData.height;
  const weight = userData.weight;
  const feet = userData.feet;
  const inches = userData.inches;
  const desiredWeight = userData.desiredWeight;
  const isMale = userData.isMale;

  console.log(userData, "this is userData");

  const MEASUREMENT_CONTAINER_DATA = [
    {
      image: <Gender />,
      title: isMale,
      subtitle: "Gender",
      id: "1",
    },
    {
      image: <Age />,
      title: age,
      subtitle: "Age",
      id: "2",
    },
    {
      image: <Height />,
      title: height,
      feet: feet,
      inches: inches,
      imperialSubtitle: "Height ft",
      subtitle: "Height cm",
      id: "3",
    },
    {
      image: <Scales />,
      title: weight,
      subtitle: "Weight",
      id: "4",
    },
  ];

  console.log(userData, "this is from redux measurements");
  console.log(age, "this is from redux age");
  console.log(height, "this is from redux height");
  console.log(weight, "this is from redux weight");
  console.log(desiredWeight, "this is from redux desiredWeight");
  console.log(isMale, "this is from redux gender");

  return (
    <SectionWrapper>
      <GridWrapper
        gridTemplateColumns="repeat(4,1fr)"
        maxWidth="71.875rem"
        m="s0auto"
        p="5rem"
        gap="1.25rem"
      >
        {MEASUREMENT_CONTAINER_DATA.map(
          ({ id, image, title, subtitle, feet, inches, imperialSubtitle }) => (
            <MeasurementInfo
              key={id}
              title={title}
              subtitle={subtitle}
              image={image}
              feet={feet}
              inches={inches}
              imperialSubtitle={imperialSubtitle}
            />
          )
        )}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default MeasurementsInfoContainer;
