import React from "react";

declare namespace ISidebarProps {
  export interface IProps {
    isShowSidebar: boolean;
    setIsShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  }
}

export default ISidebarProps;
