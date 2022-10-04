import React from "react";
import { ordersData } from "../../utils/indes";
import SyncStatusCard from "./SyncStatusCard";

const Dashboard = () => {
  const [isAutoSyncOn, setIsAutoSyncOn] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsAutoSyncOn(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <div className="flex items-start justify-between w-full gap-5">
        <div className="flex flex-col w-1/2 gap-5">
          <SyncStatusCard isAutoSyncOn={isAutoSyncOn} />
          <div className="flex flex-wrap w-full gap-5">
            {ordersData.map((data, index) => {
              return (
                <div
                  className="bg-white rounded-lg w-[48.7%] p-5 flex justify-between items-center"
                  key={index}
                >
                  <div className="flex flex-col items-start justify-between">
                    <div className="text-sm font-medium text-gray-150">{data?.title}</div>
                    <div className="text-lg font-extrabold text-black">{data?.ordersCount}</div>
                  </div>
                  <div className="flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-smoky to bg-blue w-11 h-11">
                    {data?.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="w-full bg-white rounded-lg">Select Date Range</div>
          <div className="w-full bg-white rounded-lg">Order Summary Chart</div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg"> Order Logs Table</div>
    </div>
  );
};

export default Dashboard;
