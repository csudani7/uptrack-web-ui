//#Global Imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { IToggleButtonprops } from "./ToggleButton";
//#end Local Imports

const ToggleButton: React.FC<IToggleButtonprops.IProps> = ({
  rightLabel,
  leftlabel,
  bgColor,
  currentValue,
  setCurrentValue,
  width,
}) => {
  return (
    <div
      className={clsx(
        currentValue === rightLabel ? "bg-opacity-5 bg-blue-100" : bgColor,
        width,
        "rounded-full p-2 flex items-center justify-between",
      )}
    >
      {currentValue === leftlabel ? (
        <div
          className="text-sm font-medium text-white cursor-pointer"
          onClick={() => {
            setCurrentValue(rightLabel);
          }}
        >
          {leftlabel}
        </div>
      ) : (
        <div
          className={clsx(
            currentValue === rightLabel ? "bg-smoky-100" : "bg-white",
            "w-4 h-4  rounded-full",
          )}
        />
      )}
      {currentValue === rightLabel ? (
        <div
          className="text-sm font-medium cursor-pointer text-smoky-100"
          onClick={() => {
            setCurrentValue(leftlabel);
          }}
        >
          {rightLabel}
        </div>
      ) : (
        <div className="w-4 h-4 bg-white rounded-full" />
      )}
    </div>
  );
};

export default ToggleButton;
