//Global Imports
import React from "react";
import clsx from "clsx";
//End Global Imports

//Local Imports
import { IButton } from "./Button";
//End Local Imports

const Button: React.FC<IButton.IProps> = ({
  bgColor = "bg-primary",
  fontStyle,
  bordertyle,
  children,
  rootClassName,
  onClickHandler,
  disabled,
  preffixIcon,
}) => {
  return preffixIcon ? (
    <button
      className={clsx(
        "flex items-center justify-center",
        disabled && "cursor-not-allowed",
        bgColor,
        rootClassName,
        fontStyle?.fontColor,
        fontStyle?.fontFamily,
        fontStyle?.fontSize,
        fontStyle?.fontWeight,
        bordertyle?.borderRadius,
        bordertyle?.borderWidth,
        bordertyle?.borderColor,
      )}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <div className="flex items-center gap-3">
        {preffixIcon}
        {children}
      </div>
    </button>
  ) : (
    <button
      className={clsx(
        "flex items-center justify-center",
        disabled && "cursor-not-allowed",
        bgColor,
        rootClassName,
        fontStyle?.fontColor,
        fontStyle?.fontFamily,
        fontStyle?.fontSize,
        fontStyle?.fontWeight,
        bordertyle?.borderRadius,
        bordertyle?.borderWidth,
        bordertyle?.borderColor,
      )}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <div>{children}</div>
    </button>
  );
};

export default Button;
