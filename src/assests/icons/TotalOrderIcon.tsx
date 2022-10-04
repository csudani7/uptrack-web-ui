//Global Imports
import React from "react";
//#end Global Imports

//Local Imports
import { IIcons } from "./icons";
//#end Local Imports

const TotalOrderIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
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
        d="M15.8427 7.33337H6.67607V18.2023C6.67607 18.7083 7.08674 19.119 7.59274 19.119H14.9261C15.4321 19.119 15.8427 18.7083 15.8427 18.2023V7.33337Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M12.5558 10.6203C13.2717 11.3363 13.2717 12.4971 12.5558 13.2131C11.8398 13.929 10.679 13.929 9.96304 13.2131C9.24708 12.4971 9.24708 11.3363 9.96304 10.6203C10.679 9.90438 11.8398 9.90438 12.5558 10.6203"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M9.42607 16.5H13.0927"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
      <path
        d="M15.8427 11H17.6761C18.689 11 19.5094 10.1795 19.5094 9.16663V5.49996C19.5094 4.48704 18.689 3.66663 17.6761 3.66663H4.84273C3.82982 3.66663 3.0094 4.48704 3.0094 5.49996V9.16663C3.0094 10.1795 3.82982 11 4.84273 11H6.67607"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={fillColor}
      />
    </svg>
  );
};

export default TotalOrderIcon;
