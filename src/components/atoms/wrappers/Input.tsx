import React from "react";
import { Styles } from "components/atoms/wrappers/Box";
import { color } from "styled-system";

import { Theme } from "../../../styles/theme";
import styled from "styled-components/macro";

export type InputType = "text" | "email" | "password" | "date" | "number";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: InputType;
  placeholder?: string;
  error?: string;
  minValue?: number;
  maxValue?: number;
  onChange?: () => void;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const Input: React.FC<InputFieldProps> = ({
  minValue,
  maxValue,
  label,
  type,
  onChange,
  error,
  placeholder,
  ...rest
}) => (
  <>
    {label && <label htmlFor="input">{label}</label>}
    <InputElement
      id={label}
      type={type}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      {...rest}
    />
    {error && <span>{error}</span>}
  </>
);

const InputElement = styled.input`
  border: none;
  outline: none;
  /* border-bottom: 1px solid black; */
  padding: 1rem 1rem 0.2rem 1rem;
  width: 100%;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  && {
    ${color}
  }
`;
