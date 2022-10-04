import React from "react";
declare namespace IToggleButtonprops {
  export interface IProps {
    rightLabel: string;
    leftlabel: string;
    bgColor: string;
    currentValue: string;
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
    width: string;
  }
}

export { IToggleButtonprops };
