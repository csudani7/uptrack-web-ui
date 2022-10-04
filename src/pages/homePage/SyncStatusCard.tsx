//#Global Imports
import React from "react";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { CloseIcon, PaypalIcon, ShopifyIcon, SuccessIcon, SyncIcon } from "../../assests/icons";
import IHomePageProps from "./homePage";
//#end Local Imports

const SyncStatusCard: React.FC<IHomePageProps.ISyncStatusProps> = ({ isAutoSyncOn }) => {
  return (
    <div className="w-full px-5 pt-5 pb-12 bg-white rounded-lg">
      <div className="mb-10 text-lg font-semibold text-black">Sync Status</div>
      <div className="flex flex-col">
        <div className={clsx(isAutoSyncOn ? "mb-10" : "mb-6", "flex items-center justify-between")}>
          <div className="flex items-center justify-center overflow-hidden border rounded-full border-gray-150 w-11 h-11">
            <ShopifyIcon />
          </div>
          <div className="w-16 text-sm font-medium text-center text-black">
            {isAutoSyncOn ? "Automatic Sync" : "Automatic Sync Disabled"}
          </div>
          <div className="flex items-center justify-center overflow-hidden border rounded-full border-gray-150 w-11 h-11">
            <PaypalIcon />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <SuccessIcon />
          <div
            className={clsx(
              isAutoSyncOn ? "border-success" : "border-red",
              "w-1/2 border border-dashed",
            )}
          />
          {isAutoSyncOn ? (
            <div className="flex items-center justify-center overflow-hidden text-white rounded-full w-11 h-[37.5px] bg-success">
              <SyncIcon />
            </div>
          ) : (
            <CloseIcon />
          )}
          <div
            className={clsx(
              isAutoSyncOn ? "border-success" : "border-red",
              "w-1/2 border border-dashed",
            )}
          />
          {isAutoSyncOn ? <SuccessIcon /> : <CloseIcon />}
        </div>
      </div>
    </div>
  );
};

export default SyncStatusCard;
