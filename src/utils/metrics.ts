export const caloricMetricIntake = (weight: number) =>
  Math.round(weight * 0.9 * 30);

export const caloricImperialIntake = (weight: number) =>
  Math.round(weight * 0.9 * 14);

export const heightToInches = (feet: number, inches: number) =>
  Math.round(feet * 12 + inches * 1);

export const imperialBMIcalculator = (weight: number, inches: number) =>
  Math.floor((weight * 703) / (inches * inches));

export const metricBMIcalculator = (weight: number, height: number) =>
  Math.floor(((weight * 1000) / (height * height)) * 10);

export const nameOfCurrentMonth = new Date().toLocaleString("default", {
  month: "long",
});

export const nameOfTwoMonths = new Intl.DateTimeFormat("en-US", {
  month: "long",
}).format(new Date("6-6-2022"));
