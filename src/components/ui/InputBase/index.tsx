//Global Imports
import React, { ReactElement } from "react";
import clsx from "clsx";
//End Global Imports

//Local Imports
import IInputBaseProps from "./inputBase";
//End Local Imports

const InputBase = React.forwardRef<HTMLInputElement, IInputBaseProps.IProps>(
  ({
    rootClassName,
    disabled = false,
    error = false,
    errorClasses,
    errorMessage,
    inputClasses,
    fullWidth = false,
    label,
    type,
    name,
    value,
    onChange,
    onClick,
    onBlur,
    autoComplete = "new-password",
    accept,
    pattern,
    maxLength,
  }: IInputBaseProps.IProps): ReactElement => {
    const labelStyles = [
      error && !disabled && "text-error text-base font-ssp mb-4 tracking-wide",
      !error &&
        !disabled &&
        "text-black text-base mb-4 font-ssp tracking-wide font-medium leading-5",
    ];

    const rootStyles = ["font-ssp", fullWidth && "w-full", !fullWidth && "w-64", rootClassName];

    return (
      <div className={clsx(rootStyles)}>
        {label && <label className={clsx(labelStyles)}>{label}</label>}
        <div className={clsx("relative h-16 rounded-[5px]", label && "mt-4")}>
          <input
            accept={accept}
            id={name}
            name={name}
            maxLength={maxLength}
            type={type}
            value={value}
            pattern={pattern}
            onChange={onChange}
            onBlur={onBlur}
            className={clsx(
              error && "border-red-500",
              "rounded-[5px] w-full pl-6 pt-3 h-full text-gray-900 placeholder-transparent border peer focus:outline-none focus:border-black-600",
              inputClasses,
            )}
            onClick={onClick}
            placeholder="john@doe.com"
            autoComplete={autoComplete}
            disabled={disabled}
          />
        </div>
        {error && errorMessage && (
          <div className={clsx(errorClasses, "py-1 text-sm text-error")}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default InputBase;
