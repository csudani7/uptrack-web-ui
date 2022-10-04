import React from "react";
declare namespace IButton {
  type fontStyle = {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    fontColor?: string;
  };
  type borderStyle = { borderColor?: string; borderWidth?: string; borderRadius?: string };
  export interface IProps {
    children: React.ReactNode;
    bgColor?: string;
    fontStyle?: fontStyle;
    bordertyle?: borderStyle;
    rootClassName?: string;
    onClickHandler?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disabled?: boolean;
    preffixIcon?: React.ReactNode;
  }
}

export { IButton };
