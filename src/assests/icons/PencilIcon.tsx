//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const PencilIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "14"}
      height={height || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33325 9.91667V11.6667H4.08325L9.33325 6.41667L7.58325 4.66667L2.33325 9.91667Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M8.75 3.50001L10.5 5.25001L11.9583 3.79167L10.2083 2.04167L8.75 3.50001Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default PencilIcon;
