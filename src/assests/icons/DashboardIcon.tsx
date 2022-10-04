//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const DashboardIcon = ({ fillColor, width, height }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "19"}
      height={height || "18"}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M16.25 14.0625V9.88014C16.25 8.73142 16.25 8.15707 16.1019 7.62813C15.9708 7.1596 15.7553 6.71892 15.4659 6.32774C15.1393 5.88614 14.686 5.53352 13.7792 4.82828L13.4292 4.55606C12.0239 3.46305 11.3213 2.91654 10.5454 2.70647C9.86079 2.52111 9.13921 2.52111 8.45461 2.70647C7.67873 2.91654 6.97608 3.46305 5.57078 4.55606L5.22078 4.82828C4.31404 5.53352 3.86067 5.88614 3.53405 6.32774C3.24473 6.71892 3.0292 7.1596 2.89805 7.62813C2.75 8.15707 2.75 8.73142 2.75 9.88014V14.0625C2.75 14.1205 2.75 14.1495 2.7506 14.1741C2.77677 15.2402 3.63482 16.0982 4.70092 16.1244C4.72546 16.125 4.75447 16.125 4.8125 16.125H5.28125C6.16145 16.125 6.875 15.4115 6.875 14.5312V12.375C6.875 10.9253 8.05025 9.75 9.5 9.75C10.9497 9.75 12.125 10.9253 12.125 12.375V14.5312C12.125 15.4115 12.8385 16.125 13.7188 16.125H14.1875C14.2455 16.125 14.2745 16.125 14.2991 16.1244C15.3652 16.0982 16.2232 15.2402 16.2494 14.1741C16.25 14.1495 16.25 14.1205 16.25 14.0625Z"
          stroke="white"
          strokeWidth="1.51042"
          className={fillColor}
        />
      </g>
    </svg>
  );
};

export default DashboardIcon;
