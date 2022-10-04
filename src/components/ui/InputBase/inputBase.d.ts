import React from "react";
import { FieldError } from "react-hook-form";

declare namespace IInputBaseProps {
  export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
    autoComplete?: string;
    rootClassName?: string;
    inputClasses?: string;
    errorClasses?: string;
    defaultValue?: string;
    disabled?: boolean;
    error?: boolean | string | FieldError;
    errorMessage?: any;
    fullWidth?: boolean;
    hint?: string;
    label?: any;
    name?: string;
    placeholder?: string | React.ReactNode;
    type?: "text" | "password" | "email" | "number" | "date" | "file";
    value?: string | number;
    onChange?: (e) => void;
    onClick?: (e) => void;
    onBlur?: (e) => void;
    placeholderStyle?: string;
    accept?: string;
    pattern?: string;
    maxLength?: number;
  }
}

export default IInputBaseProps;
