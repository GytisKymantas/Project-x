import React from "react";
import { Styles } from "components/atoms/wrappers/Box";
import { color } from "styled-system";

import { theme, Theme } from "../../../styles/theme";
import styled from "styled-components/macro";

export type InputType = "text" | "email" | "password" | "date" | "number";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  minValue?: number;
  maxValue?: number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: InputType;
  value?: number | string;
}

type InputFieldProps = InputProps & Styles<Theme>;

export const Input: React.FC<InputFieldProps> = ({
  error,
  label,
  minValue,
  maxValue,
  onChange,
  placeholder,
  type,
  ...rest
}) => (
  <>
    {label && <label htmlFor="input">{label}</label>}
    <InputElement
      id={label}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
    {error && <span>{error}</span>}
  </>
);

const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.lightwhite};
  outline: none;
  padding: 1rem 1rem 0.2rem 1rem;
  width: 100%;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  :focus {
    border-bottom: 1px solid ${theme.colors.orange};
  }

  && {
    ${color}
  }
`;
