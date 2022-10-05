//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const InfoIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 15.1875V15.1875C5.58244 15.1875 2.8125 12.4176 2.8125 9V9C2.8125 5.58244 5.58244 2.8125 9 2.8125V2.8125C12.4176 2.8125 15.1875 5.58244 15.1875 9V9C15.1875 12.4176 12.4176 15.1875 9 15.1875Z"
          stroke="#575E68"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fillColor}
        />
        <path
          d="M9 9.85938V9.68751C9 9.12582 9.34719 8.82126 9.69506 8.58751C10.0347 8.35857 10.375 8.06019 10.375 7.51019C10.375 6.75051 9.75969 6.13519 9 6.13519C8.24031 6.13519 7.625 6.75051 7.625 7.51019"
          stroke="#575E68"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fillColor}
        />
        <path
          d="M8.99931 11.75C8.90444 11.75 8.82744 11.827 8.82813 11.9219C8.82813 12.0167 8.90513 12.0938 9 12.0938C9.09488 12.0938 9.17188 12.0167 9.17188 11.9219C9.17188 11.827 9.09488 11.75 8.99931 11.75"
          stroke="#575E68"
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fillColor}
        />
      </g>
    </svg>
  );
};

export default InfoIcon;
