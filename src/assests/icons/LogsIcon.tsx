//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const LogsIcon = ({ fillColor, width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "23"}
      height={height || "22"}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2708 6.41663V7.56246"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M11.2708 15.5833V14.4375"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M13.5506 9.16662C13.491 8.27195 12.7531 7.56245 11.8438 7.56245H10.5879C9.69877 7.56245 8.97919 8.28295 8.97919 9.1712C8.97919 9.90912 9.48152 10.5526 10.1965 10.7323L12.3443 11.2713C13.0602 11.451 13.5616 12.0945 13.5616 12.8324C13.5616 13.7215 12.8411 14.4411 11.9529 14.4411H10.697C9.78585 14.4411 9.04794 13.7298 8.98927 12.8333"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M5.88086 5.38262C7.31911 3.94437 9.30644 3.05521 11.5019 3.05521C15.8918 3.05521 19.4512 6.61279 19.4512 11.0009C19.4512 11.6132 19.3751 12.2072 19.244 12.7801"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M18.0148 11.5518L19.4512 12.9883L20.8876 11.5518"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M17.1192 16.6173C15.6809 18.0555 13.6936 18.9447 11.4982 18.9447C7.10824 18.9447 3.54883 15.3871 3.54883 10.999C3.54883 10.3867 3.62491 9.79269 3.75599 9.21977"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M4.9852 10.4482L3.54878 9.01175L2.11237 10.4482"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default LogsIcon;
