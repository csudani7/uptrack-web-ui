//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const IdIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "22"}
      height={height || "22"}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33333 13.75V8.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3833 13.75H10.6333V8.25H13.3833C14.3962 8.25 15.2166 9.07042 15.2166 10.0833V11.9167C15.2166 12.9296 14.3962 13.75 13.3833 13.75V13.75Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8236 19.5736H5.17639C3.65748 19.5736 2.42639 18.3425 2.42639 16.8236V5.17639C2.42639 3.65747 3.65748 2.42639 5.17639 2.42639H16.8226C18.3416 2.42639 19.5726 3.65747 19.5726 5.17639V16.8226C19.5736 18.3425 18.3425 19.5736 16.8236 19.5736V19.5736Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default IdIcon;
