import React from "react";
import { Box, Input, FlexWrapper, Typography } from "components";
import { InputType } from "../wrappers/Input";

interface InputFormDataProps {
  setStateValue?: React.Dispatch<React.SetStateAction<string>>;
  imperialSetStateValue?: React.Dispatch<React.SetStateAction<string>>;
  imperial?: boolean;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  minValue?: number;
  maxValue?: number;
  measurement: string;
  imperialPlaceholder?: string;
  imperialMinValue?: number;
  imperialMaxValue?: number;
  imperialMeasurement?: string;
  imperialValue?: string;
  type: InputType;
}

export const InputFormData: React.FC<InputFormDataProps> = ({
  setStateValue,
  imperialSetStateValue,
  imperial,
  value,
  measurement,
  placeholder,
  maxLength,
  minLength,
  minValue,
  maxValue,
  imperialPlaceholder,
  imperialMinValue,
  imperialMaxValue,
  imperialMeasurement,
  imperialValue,
  type,
}) => {
  const handleImperialInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    imperialSetStateValue!(eventTarget.value);
  };

  const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = e.target as HTMLInputElement;
    setStateValue!(eventTarget.value);
  };

  return (
    <FlexWrapper
      width="100%"
      justifyContent="space-between"
      position="relative"
    >
      {imperial ? (
        <FlexWrapper gap="1.625rem" width="100%">
          <FlexWrapper
            width="100%"
            justifyContent="space-between"
            position="relative"
          >
            <Input
              type={type}
              placeholder={placeholder}
              required
              value={value}
              onChange={(e) => handleInputValue(e)}
              minValue={minValue}
              maxValue={maxValue}
            />
            <Box mt="s16" position="absolute" right="0">
              <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
                {placeholder === "Feet" ? measurement : imperialMeasurement}
              </Typography>
            </Box>
          </FlexWrapper>
          <FlexWrapper
            width="100%"
            justifyContent="space-between"
            position="relative"
          >
            <Input
              type={type}
              placeholder={imperialPlaceholder}
              required
              value={imperialValue}
              onChange={(e) => handleImperialInputValue!(e)}
              minValue={imperialMinValue}
              maxValue={imperialMaxValue}
            />

            <Box mt="s16" position="absolute" right="0">
              <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
                {imperialMeasurement}
              </Typography>
            </Box>
          </FlexWrapper>
        </FlexWrapper>
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          required
          value={value}
          onChange={(e) => handleInputValue!(e)}
          minValue={minValue}
          maxValue={maxValue}
          maxLength={maxLength}
          minLength={minLength}
        />
      )}
      {imperial ? (
        " "
      ) : (
        <Box mt="s16" position="absolute" right="0">
          <Typography color="primary" fontFamily="Satisfy" fontSize="fs16">
            {placeholder === "Inches" ? "" : measurement}
          </Typography>
        </Box>
      )}
    </FlexWrapper>
  );
};
