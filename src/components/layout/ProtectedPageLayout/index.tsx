//#Global Imports
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import Header from "../Header";
import Sidebar from "../Sidebar";
//#end Global Imports

const ProtectedPageLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <div
      className={clsx(
        "flex bg-primary-800 min-h-screen bg-gray",
        isShowSidebar && "!bg-mask relative",
      )}
    >
      <aside className={clsx("flex", isShowSidebar && "!block absolute z-50")}>
        <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
      </aside>
      <div
        className={clsx(
          isShowSidebar ? "pl-[210px]" : "pl-[60px]",
          "flex flex-col w-full transition-all delay-150",
        )}
      >
        <Header />
        <div className="flex flex-col flex-1 p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedPageLayout;
