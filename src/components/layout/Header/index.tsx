//Global Imports
import React from "react";
import { useLocation } from "react-router-dom";
//#end Global Imports

//Local Imports
import { DropdownIcon, SettingsIcon } from "../../../assests/icons";
import { getBreadCrumbsPath } from "../../../utils/indes";
import userProfile from "../../../assests/images/svg/upTrackUserProfile.svg";
//#end Local Imports

const Header = () => {
  const router = useLocation();
  window.console.log(router, "router");

  return (
    <div className="flex items-center justify-between w-full bg-white h-[60px] pl-10 pr-5">
      <div className="text-base font-semibold text-black">
        {getBreadCrumbsPath(router?.pathname)}
      </div>
      <div className="flex items-center">
        <div className="flex items-center pr-10">
          <div className="mr-4 w-[42px] h-[42px] overflow-hidden border-4 border-white-150 rounded-full cursor-pointer">
            <img src={userProfile} className="w-full h-full" />
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="mr-4 text-base font-medium text-black">John Doe</div>
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
