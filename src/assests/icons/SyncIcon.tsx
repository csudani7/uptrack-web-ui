//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const SyncIcon = ({ fillColor, width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "19"}
      height={height || "18"}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M15.2884 6.95409C14.4458 4.57021 12.1723 2.86226 9.49992 2.86226C6.82751 2.86226 4.55401 4.57021 3.71142 6.95409M3.71142 6.95409H6.84022M3.71142 6.95409H2.74841V2.86226"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fillColor}
        />
        <path
          d="M3.70996 11.0459C4.55254 13.4298 6.82605 15.1378 9.49846 15.1378C12.1709 15.1378 14.4444 13.4298 15.287 11.0459M15.287 11.0459H12.1582M15.287 11.0459H16.25V15.1378"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={fillColor}
        />
      </g>
    </svg>
  );
};

export default SyncIcon;
