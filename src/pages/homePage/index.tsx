import React from "react";
import { ordersData } from "../../utils/indes";
import SyncStatusCard from "./SyncStatusCard";

const Dashboard = () => {
  const [isAutoSyncOn, setIsAutoSyncOn] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsAutoSyncOn(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <div className="flex flex-col items-start justify-between w-full gap-5 md:flex-row">
        <div className="flex flex-col w-full gap-5 md:w-1/2">
          <SyncStatusCard isAutoSyncOn={isAutoSyncOn} />
          <div className="flex flex-wrap justify-between w-full">
            {ordersData.map((data, index) => {
              return (
                <div
                  className="flex items-center justify-between w-full p-5 bg-white rounded-lg lg:w-[47%] mb-5"
                  key={index}
                >
                  <div className="flex flex-col items-start justify-between lg:w-3/4">
                    <div className="text-sm font-medium lg:text-xs xl:text-sm text-gray-150">
                      {data?.title}
                    </div>
                    <div className="text-lg font-extrabold text-black">{data?.ordersCount}</div>
                  </div>
                  <div className="flex items-center justify-center overflow-hidden rounded-full h-11 w-11 bg-gradient-to-r from-smoky to bg-blue xl:w-11 xl:h-11 lg:w-8 lg:h-8">
                    {data?.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="w-full bg-white rounded-lg">Select Date Range</div>
          <div className="w-full bg-white rounded-lg">Order Summary Chart</div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg"> Order Logs Table</div>
    </div>
  );
};

export default Dashboard;
