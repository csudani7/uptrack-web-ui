//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const NextPageIcon = ({ fillColor, width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "7"}
      height={height || "13"}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L6 6.5L1 11.5"
        stroke="#241A5F"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default NextPageIcon;
