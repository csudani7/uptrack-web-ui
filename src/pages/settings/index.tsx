//#Global imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { settingsMenuListData } from "../../utils";
import userProfileImage from "../../assests/images/svg/userAccountProfileImage.svg";
import AccountDetails from "./AccountDetails";
import Button from "../../components/ui/Button";
import { SecondaryPaypalIcon } from "../../assests/icons";
//#end Local Imports

const Settings = () => {
  const [currentMenu, setCurrentMenu] = React.useState<string>("account-details");
  const [profileImage, setProfileImage] = React.useState(userProfileImage);
  const [userAccountDetails, setUserAccountDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  const submitHandler = (event: any) => {
    event.preventDefault();
    window.console.log(userAccountDetails, "userAccountDetails");
  };

  return (
    <div className="flex flex-col items-start justify-between w-full h-full xl:flex-row gap-x-1 gap-y-4 xl:gap-y-0">
      {/* Setting Menu List Section */}
      <div className="flex flex-col justify-start w-full p-4 bg-white rounded-lg xl:p-10 xl:min-h-full xl:w-1/4">
        {settingsMenuListData?.map((data, index) => (
          <div
            key={index}
            className={clsx(
              currentMenu === data?.value && "bg-white-250 rounded",
              "flex items-center justify-start w-full sm:w-[200px] gap-x-5 last:mb-0 mb-[26px] text-black text-sm font-medium cursor-pointer p-[10px]",
            )}
            onClick={() => setCurrentMenu(data?.value)}
          >
            <div>{data?.icon}</div>
            <div>{data?.label}</div>
          </div>
        ))}
      </div>
      {/* Selected Settings Menu Content Section */}
      <div className="flex flex-col justify-start w-full min-h-full p-4 bg-white rounded-lg lg:p-10 xl:w-3/4">
        {currentMenu === "account-details" && (
          <AccountDetails
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            userAccountDetails={userAccountDetails}
            setUserAccountDetails={setUserAccountDetails}
            submitHandler={submitHandler}
          />
        )}
        {currentMenu === "manage-plan" && (
          <div className="flex flex-col items-center justify-start lg:items-start">
            <div className="mb-10 text-lg font-semibold text-black">Manage Plan</div>
          </div>
        )}
        {currentMenu === "connect-paypal" && (
          <div className="flex flex-col items-start justify-start">
            <div className="mb-10 text-lg font-semibold text-black">Connect Paypal</div>
            <div className="w-[250px]">
              <Button
                bgColor="bg-lightBlue"
                fontStyle={{
                  fontSize: "text-base",
                  fontWeight: "font-medium",
                  fontColor: "text-white",
                }}
                bordertyle={{
                  borderColor: "border-blue-100 border-opacity-5",
                  borderWidth: "border",
                  borderRadius: "rounded",
                }}
                rootClassName="py-[11px] px-12 w-full"
                preffixIcon={<SecondaryPaypalIcon />}
              >
                Connect Paypal
              </Button>
            </div>
          </div>
        )}
        {currentMenu === "shopify-settings" && (
          <div className="flex flex-col items-center justify-start lg:items-start">
            <div className="mb-10 text-lg font-semibold text-black">Shopify Settings</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
