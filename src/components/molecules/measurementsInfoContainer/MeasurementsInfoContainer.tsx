import React from "react";
import { MeasurementInfo } from "../../atoms/checkoutContainer/MeasurementInfo";
import { Box, SectionWrapper, GridWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
// import { MEASUREMENT_CONTAINER_DATA } from "constants/Constants";
import { Gender, Height, Scales, Age } from "assets/images";
import { BMI } from "components/atoms/BMI/BMI";
import FactsContainer from "../factsContainer/FactsContainer";

export const MeasurementsInfoContainer: React.FC = () => {
  const userData = useSelector(selectUserData);
  const age = userData.age;
  const height = userData.height;
  const weight = userData.weight;
  const feet = userData.feet;
  const inches = userData.inches;
  const heightInches = userData.feet * 12 + userData.inches;
  const desiredWeight = userData.desiredWeight;
  const isMale = userData.isMale;

  console.log(userData, "this is userData");
  // const handleGender = () => {
  //   if (isMale === true) {
  //     return (isMale = "Male");
  //     console.log(isMale, "in function");
  //   }
  // };
  const MEASUREMENT_CONTAINER_DATA = [
    {
      image: <Gender />,
      title: isMale,
      subtitle: "Gender",
      id: "1212",
    },
    {
      image: <Age />,
      title: age,
      subtitle: "Age",
      id: "1313",
    },
    {
      image: <Height />,
      title: height,
      feet: feet,
      inches: inches,
      imperialSubtitle: "Height ft",
      subtitle: "Height cm",
      id: "1414",
    },
    {
      image: <Scales />,
      title: weight,
      subtitle: "Weight",
      id: "1515",
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
        maxWidth="1150px"
        m="s0auto"
        p="5rem"
        gap="20px"
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

{
  /* {MEASUREMENT_CONTAINER_DATA.map(({ id, image, title, subtitle }) => (
  <MeasurementInfo
    key={id}
    title={title}
    subtitle={subtitle}
    image={image}
  />
))} */
}
