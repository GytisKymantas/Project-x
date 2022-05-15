import { MASSIVE } from "constants/QuestionMassive";
import TryOut from "../female/tryout";
import { Box } from "components";
import React from "react";

export const STEP_SIX = [
  {
    id: "1",
    title: "High blood pressure",
  },
  {
    id: "2",
    title: "Overweight",
  },
  {
    id: "3",
    title: "Diabetes",
  },
  {
    id: "4",
    title: "Bulimia",
  },
  {
    id: "5",
    title: "Chest discomfort",
  },
  {
    id: "6",
    title: "Shortness of Breath",
  },
  {
    id: "7",
    title: "Anxiety",
  },
  {
    id: "8",
    title: "Other",
  },
  {
    id: "8",
    title: "None",
  },
];

const Male = () => {
  console.log(MASSIVE, "from massive");
  const massive = MASSIVE[0];
  console.log(massive, "from abamassive");
  console.log(STEP_SIX);

  return (
    <Box>
      {STEP_SIX.map((obj, i) => (
        <Box>lets go</Box>
      ))}
    </Box>
  );
};

export default Male;
{
  /* <TryOut answers={title} key={id} link={idx}/>  */
}
