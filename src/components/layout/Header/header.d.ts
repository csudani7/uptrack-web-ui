import React from "react";

declare namespace IHeaderProps {
  export interface IProps {
    setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    setisHideOnMobile: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

export default IHeaderProps;
