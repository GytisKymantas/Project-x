// import { useSelector } from "react-redux";
// import { selectUserData, selectQuizAnswers } from "state/selectors";

// export const userData = useSelector(selectUserData);
// export const weight = userData.weight;
// export const desiredWeight = userData.desiredWeight;

// export const userQuizAnswers = useSelector(selectQuizAnswers);
// export const workoutFrequencyAnswer = userQuizAnswers?.isWorkingOut;
// export const isSmoking = userQuizAnswers?.isSmoking;
// export const isHeartCondition = userQuizAnswers?.isHeartCondition;
// export const isAsthmatic = userQuizAnswers?.isAsthmatic;

export const metricBMIcalculator = (weight: number, height: number) =>
  Math.floor(((weight * 1000) / (height * height)) * 10);
export const heightToInches = (feet: number, inches: number) =>
  Math.round(feet * 12 + inches * 1);
export const imperialBMIcalculator = (weight: number, inches: number) =>
  Math.floor((weight * 703) / (inches * inches));
export const caloricMetricIntake = (weight: number) => weight * 0.9 * 30;
export const caloricImperialIntake = (weight: number) => weight * 0.9 * 14;

// export const nameOfCurrentMonth = new Date().toLocaleString("default", {
//   month: "long",
// });
// export const nameOfTwoMonths = new Intl.DateTimeFormat("en-US", {
//   month: "long",
// }).format(new Date("6-6-2022"));
