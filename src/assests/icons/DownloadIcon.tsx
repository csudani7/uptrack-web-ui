//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const DownloadIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "14"}
      height={height || "13"}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00027 9.17361V1.6875"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M11.2777 11.3125H2.72217"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M9.67393 6.5L6.99978 9.17415L4.32617 6.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default DownloadIcon;
