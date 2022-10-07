//#Global Imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//Local Imports
import { InfoIcon } from "../../assests/icons";
import Button from "../../components/ui/Button";
import ISettingsProps from "./settings";
//#end Local Imports

const ManagePlan: React.FC<ISettingsProps.IManagePlanProps> = ({
  selectedPlan,
  setSelectedPlan,
}) => {
  return (
    <div className="flex flex-col items-center justify-start xl:items-start">
      <div className="mb-10 text-lg font-semibold text-black">Manage Plan</div>
      <div className="flex flex-wrap items-center m-auto xl:flex-row gap-x-5 gap-y-10">
        {/* Free Plan Card */}
        <div
          className={clsx(
            selectedPlan === "unlimited" && " border-opacity-5",
            "flex flex-col items-center justify-between p-8 border-2 border-blue-100 rounded-lg cursor-pointer",
          )}
          onClick={() => setSelectedPlan("free")}
        >
          <div className="text-sm font-bold text-blue-100 py-[5px] px-[10px] bg-blue-100 bg-opacity-5 mb-4 uppercase">
            Almost Free
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[40px] text-blue-100">$0.01</span>
            <span className="text-sm font-medium text-blue-100">/ month</span>
          </div>
          <div className="mt-2 mb-10 text-base font-medium text-black">Billed Monthly</div>
          <div className="flex flex-col items-center justify-between w-full mb-10 gap-y-4">
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-bold text-black xl:text-sm">
                Sync 250* Tracking Requests
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">Order ID Based Sync</div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">
                Sync 250* Tracking Requests
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">Automatic Sync v2.0 </div>
              <div>
                <InfoIcon />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[276px]">
            <Button
              bgColor={
                selectedPlan === "free" ? "bg-gradient-to-r from-smoky to bg-blue" : "bg-white-200"
              }
              fontStyle={{
                fontSize: "text-base",
                fontWeight: "font-medium",
                fontColor: selectedPlan === "free" ? "text-white" : "text-blue-100",
              }}
              bordertyle={{
                borderColor: "border-blue-100 border-opacity-5",
                borderWidth: "border",
                borderRadius: "rounded",
              }}
              rootClassName="py-2 px-[18px] w-full"
            >
              Selected
            </Button>
          </div>
        </div>
        {/* Unlimited Plan Card */}
        <div
          className={clsx(
            selectedPlan === "free" && "border-opacity-5",
            "flex flex-col items-center justify-between p-8 border-2 border-blue-100 rounded-lg cursor-pointer",
          )}
          onClick={() => setSelectedPlan("unlimited")}
        >
          <div className="text-sm font-bold text-success-100 py-[5px] px-[10px] bg-success-100 bg-opacity-10 mb-4 uppercase">
            Unlimited
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-[40px] text-blue-100">$9.99</span>
            <span className="text-sm font-medium text-blue-100">/ month</span>
          </div>
          <div className="mt-2 mb-10 text-base font-medium text-black">Billed Monthly</div>
          <div className="flex flex-col items-center justify-between w-full mb-10 gap-y-4">
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-bold text-black xl:text-sm">
                Sync 250* Tracking Requests
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">Order ID Based Sync</div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">
                Sync 250* Tracking Requests
              </div>
              <div>
                <InfoIcon />
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-5 xl:gap-0">
              <div className="text-xs font-medium text-black xl:text-sm">Automatic Sync v2.0 </div>
              <div>
                <InfoIcon />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[276px]">
            <Button
              bgColor={
                selectedPlan === "unlimited"
                  ? "bg-gradient-to-r from-smoky to bg-blue"
                  : "bg-white-200"
              }
              fontStyle={{
                fontSize: "text-base",
                fontWeight: "font-medium",
                fontColor: selectedPlan === "unlimited" ? "text-white" : "text-blue-100",
              }}
              bordertyle={{
                borderColor: "border-blue-100 border-opacity-5",
                borderWidth: "border",
                borderRadius: "rounded",
              }}
              rootClassName="py-2 px-[18px] w-full"
            >
              Install
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePlan;
