//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const CompletedIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "19"}
      height={height || "18"}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80173 8.28683L9.26398 11.75L16.2994 4.71458C14.8511 2.34042 12.2441 0.75 9.2594 0.75C4.70265 0.75 1.0094 4.44325 1.0094 9C1.0094 13.5568 4.70265 17.25 9.2594 17.25C13.5054 17.25 16.9988 14.0417 17.4553 9.91667"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default CompletedIcon;
