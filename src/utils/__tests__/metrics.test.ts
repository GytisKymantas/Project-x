import {
  metricBMIcalculator,
  imperialBMIcalculator,
  heightToInches,
  caloricMetricIntake,
  caloricImperialIntake,
} from "../metrics";

describe("Height to inches", () => {
  it("converts given Feet to given inches", () => {
    expect(heightToInches(5, 11)).toEqual(71);
  });
});
describe("Metric BMI", () => {
  it("Calculates BMI in metric units", () => {
    expect(metricBMIcalculator(80, 180)).toEqual(24);
  });
});

describe("Imperial BMI", () => {
  it("Calculates BMI in imperial units", () => {
    expect(imperialBMIcalculator(200, 71)).toEqual(27);
  });
});

describe("Metric Caloric counter", () => {
  it("Calculates the approximate daily calories in metric units", () => {
    expect(caloricMetricIntake(100)).toEqual(2700);
  });
});

describe("Imperial Caloric counter", () => {
  it("Calculates the approximate daily calories in imperial units", () => {
    expect(caloricImperialIntake(200)).toEqual(2520);
  });
});
