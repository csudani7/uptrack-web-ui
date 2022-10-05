//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const IntelligenceIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0776 3.92252L16.7376 3.26252"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M16.7559 12.1909L16.0592 11.485"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M8.49671 3.92252L7.83671 3.26252"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.85465 18.4398L1.56032 17.1445C1.2019 16.7861 1.2019 16.2059 1.56032 15.8474L10.3392 7.06486C10.6976 6.70645 11.2779 6.70645 11.6354 7.06486L12.9297 8.36011C13.2881 8.71853 13.2881 9.29878 12.9297 9.6572L4.15082 18.4398C3.79332 18.7982 3.21307 18.7982 2.85465 18.4398Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M11.1001 11.485L8.50598 8.90001"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M12.2826 2.22669V1.29169"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M17.7733 7.71752H18.7083"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default IntelligenceIcon;
