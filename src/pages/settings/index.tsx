//#Global imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import ManagePlan from "./ManagePlan";
import AccountDetails from "./AccountDetails";
import Button from "../../components/ui/Button";
import RadioButton from "../../components/ui/RadioButton";
import { SecondaryPaypalIcon } from "../../assests/icons";
import { settingsMenuListData, shopifySettingList } from "../../utils";
import userProfileImage from "../../assests/images/svg/userAccountProfileImage.svg";
import InputBase from "../../components/ui/InputBase";
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
  const [selectedPlan, setSelectedPlan] = React.useState<string>("unlimited");
  const [isChecked, setIsChecked] = React.useState<number>(0);
  const [customLink, setCustomLink] = React.useState<string>("");

  const submitHandler = (event: any) => {
    event.preventDefault();
  };

  const changeSettingHandler = (value: number) => {
    setIsChecked(Number(value));
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
          <ManagePlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
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
          <div className="flex flex-col items-start justify-start">
            <div className="mb-10 text-lg font-semibold text-black">Shopify Settings</div>
            {shopifySettingList.map((data, i) => (
              <div key={i} className="flex items-start justify-start mb-6">
                <div className="mt-1 mr-2">
                  <RadioButton onChangeHandler={changeSettingHandler} value={data?.id} />
                </div>
                <div
                  className={clsx(
                    isChecked !== data?.id && "text-opacity-50",
                    "text-sm lg:text-base font-medium text-black mr-3",
                  )}
                >
                  {data.label}
                </div>
                <div className="relative">
                  <div className={clsx(data?.id === 2 && "peer cursor-pointer", "mt-[2px]")}>
                    {data.icon}
                  </div>
                  <div className="hidden peer-hover:block absolute w-6 h-3 -ml-3  after:absolute after:w-3 after:h-3 after:left-1/3 after:rotate-45 after:translate-x-1/2 after:translate-y-1/2 after:bg-black after:content-['']" />
                  <div className="absolute hidden p-2 lg:p-4 text-sm lg:text-lg font-medium text-white bg-black bottom peer-hover:block top-[1.9rem] -right-4 lg:-right-8 z-10">
                    <div>For example:</div>
                    <div>{`www.trackingmore.com/en/{tracking_number}`}</div>
                  </div>
                </div>
              </div>
            ))}
            {isChecked === 4 && (
              <div className="w-full md:w-[400px]">
                <InputBase
                  type="text"
                  className="mb-4"
                  name="customLink"
                  placeholder="example.com/anything?{tracking_code}"
                  fullWidth={true}
                  value={customLink}
                  onChange={(event) => setCustomLink(event.target.value)}
                  placeholderClass="lg:placeholder:text-base placeholder:!text-xs"
                  inputClasses="!py-3"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
