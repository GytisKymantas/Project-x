import React from "react";
import { Box, Input, FlexWrapper, Typography } from "components";

interface InputFormDataProps {
  setStateValue: (e: React.FormEvent<HTMLInputElement>) => void;
  imperialSetStateValue?: (e: React.FormEvent<HTMLInputElement>) => void;
  imperial?: boolean;
  value?: string;
  placeholder?: string;
  minValue?: number;
  maxValue?: number;
  measurement: string;
  imperialPlaceholder?: string;
  imperialMinValue?: number;
  imperialMaxValue?: number;
  imperialMeasurement?: string;
  imperialValue?: string;
}

export const InputFormData: React.FC<InputFormDataProps> = ({
  setStateValue,
  imperialSetStateValue,
  imperial,
  value,
  measurement,
  placeholder,
  minValue,
  maxValue,
  imperialPlaceholder,
  imperialMinValue,
  imperialMaxValue,
  imperialMeasurement,
  imperialValue,
}) => (
  <FlexWrapper width="100%" justifyContent="space-between" position="relative">
    {imperial ? (
      <FlexWrapper gap="1.625rem" width="100%">
        <FlexWrapper
          width="100%"
          justifyContent="space-between"
          position="relative"
        >
          <Input
            type="number"
            placeholder={placeholder}
            required
            value={value}
            onChange={(e) => setStateValue(e.target.value)}
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
            type="number"
            placeholder={imperialPlaceholder}
            required
            value={imperialValue}
            onChange={(e) => imperialSetStateValue(e.target.value)}
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
        type="number"
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => setStateValue(e.target.value)}
        minValue={minValue}
        maxValue={maxValue}
      />
    )}
    {imperial ? (
      " "
    ) : (
      <Box mt="s16" position="absolute" right="0">
        <Typography color="primary" fontFamily="Satisfy" fontSize="fs15">
          {placeholder === "Inches" ? "" : measurement}
        </Typography>
      </Box>
    )}
  </FlexWrapper>
);
