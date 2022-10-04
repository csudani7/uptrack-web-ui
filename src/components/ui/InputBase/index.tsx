//Global Imports
import React, { ReactElement } from "react";
import clsx from "clsx";
//End Global Imports

//Local Imports
import IInputBaseProps from "./inputBase";
import { SearchIcon } from "../../../assests/icons";
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
    placeholder,
    placeholderClass,
    isSearch = false,
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
        <div className={clsx("relative rounded-[5px]", label && "mt-1")}>
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
              error ? "border-red-500 focus:border-red-500" : "border-black focus:border-black",
              isSearch ? "pl-[38px] pr-[18px]" : "px-[18px]",
              "rounded-[5px] w-full h-full text-black text-base font-medium border peer focus:outline-none  py-3 placeholder-black placeholder:font-medium placeholder:text-base placeholder:opacity-50 bg-black-100 bg-opacity-50",
              inputClasses,
              placeholderClass,
            )}
            onClick={onClick}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={disabled}
          />
          {isSearch && (
            <>
              <div className="absolute top-[1.1rem] left-[14px]">
                <SearchIcon />
              </div>
            </>
          )}
        </div>
        {error && errorMessage && (
          <div className={clsx(errorClasses, "py-1 text-sm text-error")}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default InputBase;
