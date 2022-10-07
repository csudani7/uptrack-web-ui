//#Global imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { settingsMenuListData } from "../../utils";
import userProfileImage from "../../assests/images/svg/userAccountProfileImage.svg";
import { PencilIcon } from "../../assests/icons";
import InputBase from "../../components/ui/InputBase";
import Button from "../../components/ui/Button";
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
              "flex items-center justify-start w-full gap-x-5 last:mb-0 mb-[26px] text-black text-sm font-medium cursor-pointer p-[10px]",
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
          <div className="flex flex-col items-center justify-start lg:items-start">
            <div className="mb-10 text-lg font-semibold text-black">Account Details</div>
            {/* Profile Picture Section */}
            <div className="relative">
              <div className="w-[100px] h-[100px] overflow-hidden border-4 border-blue-100 rounded-full">
                <img src={profileImage} className="w-full h-full" />
              </div>
              <div className="absolute right-0 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full cursor-pointer top-2/3">
                <PencilIcon />
              </div>
              <InputBase
                rootClassName="absolute !w-8 !h-8 rounded-full right-0 top-2/3 overflow-hidden"
                inputClasses="absolute !w-8 !h-8 rounded-full right-0 top-2/3 overflow-hidden !px-0 !py-8 cursor-pointer"
                type="file"
                onChange={(event) => setProfileImage(URL.createObjectURL(event?.target?.files[0]))}
              />
            </div>
            <form
              className="flex flex-col items-center w-full mt-5 xl:items-start xl:w-1/2 lg:w-1/2"
              onSubmit={submitHandler}
            >
              <div className="flex flex-col items-center w-full gap-2 mb-4 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <InputBase
                    type="text"
                    name="firstName:"
                    label="First Name"
                    placeholder="Enter Firstname"
                    fullWidth={true}
                    value={userAccountDetails?.firstName}
                    onChange={(event) =>
                      setUserAccountDetails((preValue) => {
                        return { ...preValue, firstName: event.target.value };
                      })
                    }
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <InputBase
                    type="text"
                    name="lastName"
                    label="Last Name:"
                    placeholder="Enter Lastname"
                    fullWidth={true}
                    value={userAccountDetails?.lastName}
                    onChange={(event) =>
                      setUserAccountDetails((preValue) => {
                        return { ...preValue, lastName: event.target.value };
                      })
                    }
                  />
                </div>
              </div>
              <InputBase
                type="email"
                name="email"
                label="Email:"
                placeholder="Enter Email"
                fullWidth={true}
                value={userAccountDetails?.email}
                inputClasses="mb-4"
                onChange={(event) =>
                  setUserAccountDetails((preValue) => {
                    return { ...preValue, email: event.target.value };
                  })
                }
              />
              <InputBase
                type="password"
                name="oldPassword"
                label="Old Password:"
                placeholder="Enter Old Password"
                fullWidth={true}
                value={userAccountDetails?.oldPassword}
                inputClasses="mb-4"
                onChange={(event) =>
                  setUserAccountDetails((preValue) => {
                    return { ...preValue, oldPassword: event.target.value };
                  })
                }
              />
              <InputBase
                type="password"
                name="newPassword"
                label="New Password:"
                placeholder="Enter New Password"
                fullWidth={true}
                value={userAccountDetails?.newPassword}
                inputClasses="mb-4"
                onChange={(event) =>
                  setUserAccountDetails((preValue) => {
                    return { ...preValue, newPassword: event.target.value };
                  })
                }
              />
              <Button
                bgColor="bg-gradient-to-r from-smoky to bg-blue"
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
                rootClassName="py-2 px-[18px] lg:w-full w-full md:w-1/2"
              >
                Update
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
