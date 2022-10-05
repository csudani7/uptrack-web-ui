//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const UserIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="8" cy="5.5" rx="3" ry="3.5" stroke="#4A4F56" strokeWidth="1.5" />
      <path
        d="M3.5 14C3.5 14 5 12 8 12C11 12 12.5 14 12.5 14"
        stroke="#4A4F56"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={fillColor}
      />
    </svg>
  );
};

export default UserIcon;
