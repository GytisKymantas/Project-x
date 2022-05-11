import students from "assets/images/image.png";
import gatsbyImg from "assets/images/icon.png";
import quizBackGround from "assets/images/quizBackGround.jpg";
import healthfitness from "assets/images/healthfitness.png";
import yellowtombstone from "assets/images/yellowtombstone.png";
import skipper from "assets/images/skipper.png";
import yoga from "assets/images/yoga.png";
import yogabackground from "assets/images/yogabackground.png";

export type Visuals = keyof typeof visuals;

export const visuals: Record<string, string> = {
  // turi buti ir key ir value vienodi
  students,
  gatsbyImg,
  quizBackGround,
  healthfitness,
  yellowtombstone,
  skipper,
  yoga,
  yogabackground,
};
