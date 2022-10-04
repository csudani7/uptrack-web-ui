//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const PaypalWhiteIcon = ({ width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "17"}
      height={height || "18"}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.48657 9.91392H9.01198C11.267 9.91392 13.1865 8.27308 13.5385 6.04558V6.04558C13.9766 3.26533 11.828 0.75 9.01198 0.75H4.12615C3.67515 0.75 3.29107 1.07817 3.22048 1.52367L1.19648 14.357C1.1094 14.9134 1.53932 15.4167 2.10215 15.4167H4.71098L5.43698 10.8113C5.51857 10.2943 5.96407 9.91392 6.48657 9.91392Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5301 4.56604C15.1224 5.47354 16.1051 7.29862 15.7952 9.26121C15.4441 11.4887 13.5237 13.1295 11.2687 13.1295H11.288H8.87806L8.35006 16.4754C8.28039 16.9218 7.89539 17.25 7.44439 17.249L4.95839 17.2472C4.67698 17.2472 4.46248 16.9951 4.50556 16.7174L4.71089 15.4166"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaypalWhiteIcon;
