import React from "react";
import { MeasurementInfo } from "./MeasurementInfo";
import { Box, SectionWrapper, GridWrapper } from "components";
import { useSelector } from "react-redux";
import { selectUserData } from "state/selectors";
// import { MEASUREMENT_CONTAINER_DATA } from "constants/Constants";
import { Gender, Height, Scales, Age } from "assets/images";

// const age = data.age;
// const height = data.height;
// const weight = data.weight;
// const desiredWeight = data.desiredWeight;
// const isMale = data.isMale;

export const MeasurementsInfoContainer = () => {
  const userData = useSelector(selectUserData);
  const age = userData.age;
  const height = userData.height;
  const weight = userData.weight;
  const desiredWeight = userData.desiredWeight;
  const isMale = userData.isMale;

  console.log(isMale);
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
      <GridWrapper gridTemplateColumns="repeat(4,1fr)" my="10rem" gap="20px">
        {MEASUREMENT_CONTAINER_DATA.map(({ id, image, title, subtitle }) => (
          <MeasurementInfo
            key={id}
            title={title}
            subtitle={subtitle}
            image={image}
          />
        ))}
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
