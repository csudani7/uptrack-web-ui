//#Global Imports
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { DashboardIcon, LogsIcon, SettingsIcon, SyncIcon } from "../../../assests/icons";
import ISidebarProps from "./sidebar";
//#end Local Imports

const Sidebar: React.FC<ISidebarProps.IProps> = ({
  isShowSidebar,
  setIsShowSidebar,
  setisHideOnMobile,
  isHideOnMobile,
}) => {
  const [isActive, setIsActive] = useState("/");
  const navigate = useNavigate();

  const menus = [
    {
      name: "Dashboard",
      link: "/",
      icon: <DashboardIcon fillColor={isActive === "/" ? "stroke-white" : "stroke-gray-100"} />,
    },
    {
      name: "Sync Mode",
      link: "/sync-mode",
      icon: <SyncIcon fillColor={isActive === "/sync-mode" ? "stroke-white" : "stroke-gray-100"} />,
    },
    {
      name: "Logs",
      link: "/logs",
      icon: <LogsIcon fillColor={isActive === "/logs" ? "stroke-white" : "stroke-gray-100"} />,
    },
  ];
  return (
    <div
      className={clsx(
        isShowSidebar ? "w-[210px] flex" : "hidden sm:flex sm:w-[60px]",
        isHideOnMobile && "hidden sm:flex",
        "bg-gradient-to-r fixed left-0 h-full from-smoky to bg-blue duration-500 flex-col justify-between pb-5",
      )}
    >
      <div>
        {/* HamBerger Section */}
        <div className={clsx(isShowSidebar ? "justify-end pr-4" : "justify-center", "flex w-full")}>
          <div
            className="flex flex-col py-6 space-y-1 text-gray-100 cursor-pointer w-fit"
            onClick={() => setIsShowSidebar(!isShowSidebar)}
          >
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
          </div>
        </div>
        {/* Company Logo */}
        <div
          className="flex justify-center text-lg text-white font-extrabold mb-[70px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          {isShowSidebar ? "UPTRACK" : "UT"}
        </div>
        <div className="relative flex flex-col gap-4">
          {menus.map((menu, i) => (
            <NavLink
              onClick={() => {
                setIsActive(menu.link);
                setisHideOnMobile(true);
              }}
              to={menu.link}
              key={i}
              className={clsx(
                "group flex items-center text-sm  gap-3.5 font-medium p-2  rounded-md",
              )}
            >
              <div className={`${isShowSidebar ? "ml-6 duration-300" : "ml-2 duration-300"}`}>
                {menu.icon}
              </div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={clsx(
                  isActive === menu.link ? "text-white" : "text-gray-100",
                  !isShowSidebar && "opacity-0 translate-x-28 overflow-hidden",
                  "text-lg whitespace-pre duration-300",
                )}
              >
                {menu.name}
              </h2>
              <h2
                className={clsx(
                  isShowSidebar && "hidden",
                  "absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg overflow-hidden w-0 px-0 py-0 group-hover:px-2 group-hover:w-fit group-hover:py-1 group-hover:left-16 duration-300",
                )}
              >
                {menu.name}
              </h2>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <NavLink
          onClick={() => {
            setIsActive("/settings");
          }}
          to={"/settings"}
          className={clsx("group flex items-center text-sm  gap-3.5 font-medium p-2  rounded-md")}
        >
          <div className={`${isShowSidebar ? "ml-6 duration-300" : "ml-2 duration-300"}`}>
            <SettingsIcon fillColor={isActive === "/settings" ? "fill-white" : "fill-gray-100"} />
          </div>
          <h2
            style={{ transitionDelay: "600ms" }}
            className={clsx(
              isActive === "/settings" ? "text-white" : "text-gray-100",
              !isShowSidebar && "opacity-0 translate-x-28 overflow-hidden",
              "text-lg whitespace-pre duration-300",
            )}
          >
            Settings
          </h2>
          <h2
            className={clsx(
              isShowSidebar && "hidden",
              "absolute left-40 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg overflow-hidden w-0 px-0 py-0 group-hover:px-2 group-hover:w-fit group-hover:py-1 group-hover:left-16 duration-300",
            )}
          >
            Settings
          </h2>
        </NavLink>
        <h2
          className={clsx(
            !isShowSidebar && "hidden",
            "mt-6 text-white font-normal text-base opacity-50 pl-8",
          )}
        >
          Build by Proveway
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
