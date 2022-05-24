export const convertLbToKg = (lb: number) =>
  parseFloat((lb * 0.4535924).toFixed(2));

export const metricBMIcalculator = (weight: number, height: number) =>
  Math.round(((weight * 1000) / (height * height)) * 10);
export const heightToInches = (feet: number, inches: number) =>
  Math.round(feet * 12 + inches * 1);
export const imperialBMIcalculator = (weight: any, inches: any) =>
  Math.round((weight * 703) / (inches * inches));
