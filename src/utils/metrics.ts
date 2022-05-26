export const metricBMIcalculator = (weight: number, height: number) =>
  Math.floor(((weight * 1000) / (height * height)) * 10);
export const heightToInches = (feet: number, inches: number) =>
  Math.round(feet * 12 + inches * 1);
export const imperialBMIcalculator = (weight: any, inches: any) =>
  Math.floor((weight * 703) / (inches * inches));
export const caloricMetricIntake = (weight: any) => weight * 0.9 * 30;
export const caloricImperialIntake = (weight: any) => weight * 0.9 * 14;
