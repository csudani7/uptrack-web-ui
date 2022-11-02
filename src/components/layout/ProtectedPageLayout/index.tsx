//#Global Imports
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import Header from "../Header";
import Sidebar from "../Sidebar";
//#end Global Imports

const ProtectedPageLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [isHideOnMobile, setisHideOnMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.innerWidth <= 639 && setIsShowSidebar(false);
  }, []);

  return (
    <div
      className={clsx(
        "flex bg-primary-800 min-h-screen bg-gray",
        isShowSidebar && "!bg-mask relative",
      )}
    >
      <aside className={clsx("flex", isShowSidebar && "!block absolute z-50")}>
        <Sidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          isHideOnMobile={isHideOnMobile}
          setisHideOnMobile={setisHideOnMobile}
        />
      </aside>
      <div
        className={clsx(
          isShowSidebar ? "sm:pl-[210px]" : "sm:pl-[60px]",
          "flex flex-col w-full transition-all delay-[22] duration-500",
        )}
      >
        <Header setIsShowSidebar={setIsShowSidebar} setisHideOnMobile={setisHideOnMobile} />
        <div className="flex flex-col flex-1 p-3 md:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedPageLayout;
