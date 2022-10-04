//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const StopIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "23"}
      height={height || "22"}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.31497 18.7128L3.80597 15.2038C3.46222 14.8601 3.2688 14.3935 3.2688 13.9077V8.09233C3.2688 7.6065 3.46222 7.13992 3.80597 6.79617L7.31497 3.28717C7.65872 2.94342 8.1253 2.75 8.61113 2.75H14.4255C14.9114 2.75 15.378 2.94342 15.7217 3.28717L19.2307 6.79617C19.5754 7.13992 19.7688 7.6065 19.7688 8.09233V13.9067C19.7688 14.3926 19.5754 14.8592 19.2316 15.2029L15.1855 19.25H8.61113C8.1253 19.25 7.65872 19.0566 7.31497 18.7128V18.7128Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M8.7688 13.75L14.2688 8.25"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M14.2688 13.75L8.7688 8.25"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default StopIcon;
