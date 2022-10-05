//Global Imports
import React from "react";
import { useLocation } from "react-router-dom";
//#end Global Imports

//Local Imports
import { DropdownIcon, SettingsIcon } from "../../../assests/icons";
import { getBreadCrumbsPath } from "../../../utils";
import userProfile from "../../../assests/images/svg/upTrackUserProfile.svg";
import IHeaderProps from "./header";
//#end Local Imports

const Header: React.FC<IHeaderProps.IProps> = ({ setIsShowSidebar, setisHideOnMobile }) => {
  const router = useLocation();

  return (
    <div className="flex items-center justify-between w-full bg-white h-[60px] px-3 sm:pl-10 sm:pr-5">
      <div className="flex items-center gap-4">
        {/* HamBerger Section */}
        <div
          className="flex flex-col items-end py-3 space-y-1 text-gray-100 cursor-pointer sm:hidden"
          onClick={() => {
            setIsShowSidebar(true);
            setisHideOnMobile(false);
          }}
        >
          <div className="w-6 h-[2px] bg-gradient-to-r from-smoky to bg-blue" />
          <div className="w-6 h-[2px] bg-gradient-to-r from-smoky to bg-blue" />
          <div className="w-6 h-[2px] bg-gradient-to-r from-smoky to bg-blue" />
        </div>
        <div className="text-xs font-semibold text-black sm:text-base">
          {getBreadCrumbsPath(router?.pathname)}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center pr-5 sm:pr-10">
          <div className="mr-4 w-[42px] h-[42px] overflow-hidden border-4 border-white-150 rounded-full cursor-pointer">
            <img src={userProfile} className="w-full h-full" />
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="mr-4 text-xs font-medium text-black sm:text-base">John Doe</div>
            <DropdownIcon />
          </div>
        </div>
        <div className="cursor-pointer">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
