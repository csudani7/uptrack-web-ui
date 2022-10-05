//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const CreditCardsIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "18"}
      height={height || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8125 13.8125H6.25C5.49031 13.8125 4.875 13.1972 4.875 12.4375V7.625C4.875 6.86531 5.49031 6.25 6.25 6.25H13.8125C14.5722 6.25 15.1875 6.86531 15.1875 7.625V12.4375C15.1875 13.1972 14.5722 13.8125 13.8125 13.8125Z"
        stroke="#4A4F56"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M4.875 9H15.1875"
        stroke="#4A4F56"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M4.875 11.75H4.1875C3.42781 11.75 2.8125 11.1347 2.8125 10.375V5.5625C2.8125 4.80281 3.42781 4.1875 4.1875 4.1875H11.75C12.5097 4.1875 13.125 4.80281 13.125 5.5625V6.25"
        stroke="#4A4F56"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M9 11.75H6.9375"
        stroke="#4A4F56"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default CreditCardsIcon;
