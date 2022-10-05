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
    errorMessage?: string;
    fullWidth?: boolean;
    hint?: string;
    label?: string | ReactNode;
    name?: string;
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "date" | "file";
    value?: string | number;
    onChange?: (e) => void;
    onClick?: (e) => void;
    onBlur?: (e) => void;
    placeholderStyle?: string;
    accept?: string;
    pattern?: string;
    maxLength?: number;
    placeholderClass?: string;
    isSearch?: boolean;
  }
}

export default IInputBaseProps;
