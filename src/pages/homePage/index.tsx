//#Global Imports
import React from "react";
import moment from "moment";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { ordersData, selectDateRangeData } from "../../utils";
import SyncStatusCard from "./SyncStatusCard";
import { DatePicker } from "../../components/ui/DatePicker";
//#end Local Imports

const Dashboard = () => {
  const [isAutoSyncOn, setIsAutoSyncOn] = React.useState<boolean>(true);
  const [selectedDateRange, setSelectedDateRange] = React.useState<string>("last-15-days");
  const [selectedStartDate, setSelecteStartdDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [selectedEndDate, setSelecteEnddDate] = React.useState(moment().format("YYYY-MM-DD"));
  const handleStartDateChange = (value: string) => {
    setSelecteStartdDate(value);
  };

  const handleEndDateChange = (value: string) => {
    setSelecteEnddDate(value);
  };

  React.useEffect(() => {
    setIsAutoSyncOn(true);
  }, []);

  React.useEffect(() => {
    if (selectedDateRange === "today") {
      setSelecteStartdDate(moment().format("YYYY-MM-DD"));
      setSelecteEnddDate(moment().format("YYYY-MM-DD"));
    } else if (selectedDateRange === "yesterday") {
      setSelecteStartdDate(moment().subtract(1, "day").format("YYYY-MM-DD"));
      setSelecteEnddDate(moment().format("YYYY-MM-DD"));
    } else if (selectedDateRange === "last-week") {
      setSelecteStartdDate(moment().subtract(1, "weeks").startOf("isoWeek").format("YYYY-MM-DD"));
      setSelecteEnddDate(moment().subtract(1, "weeks").endOf("isoWeek").format("YYYY-MM-DD"));
    } else if (selectedDateRange === "last-15-days") {
      setSelecteStartdDate(moment().subtract(14, "days").format("YYYY-MM-DD"));
      setSelecteEnddDate(moment().format("YYYY-MM-DD"));
    } else if (selectedDateRange === "last-30-days") {
      setSelecteStartdDate(moment().subtract(29, "days").format("YYYY-MM-DD"));
      setSelecteEnddDate(moment().format("YYYY-MM-DD"));
    }
  }, [selectedDateRange]);

  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <div className="flex flex-col items-start justify-between w-full gap-5 md:flex-row">
        <div className="flex flex-col w-full gap-5 md:w-1/2">
          {/* Sync Statuc Component */}
          <SyncStatusCard isAutoSyncOn={isAutoSyncOn} />
          {/* Orders Card Section */}
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
        <div className="flex flex-col w-full space-y-4 md:w-1/2">
          {/* Selecte Date Range Card Section */}
          <div className="flex flex-col items-start w-full p-5 space-y-5 bg-white rounded-lg">
            <div className="text-lg font-semibold text-black">Select Date Range</div>
            <div className="flex flex-wrap items-center gap-x-4 xl:gap-x-6 gap-y-2 xl:gap-y-0">
              {selectDateRangeData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      selectedDateRange !== data?.value && "text-opacity-50",
                      "text-black font-medium text-xs xl:text-sm cursor-pointer",
                    )}
                    onClick={() => setSelectedDateRange(data?.value)}
                  >
                    {data?.label}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-2 lg:gap-4">
              <DatePicker
                datepickerClassname="w-28 lg:w-auto"
                selectedDate={selectedStartDate}
                dateChangeHandler={handleStartDateChange}
              />
              <div className="text-xs font-medium text-opacity-50 lg:text-base text-gray-150">
                To
              </div>
              <DatePicker
                datepickerClassname="w-28 lg:w-auto"
                selectedDate={selectedEndDate}
                dateChangeHandler={handleEndDateChange}
              />
            </div>
          </div>
          <div className="w-full bg-white rounded-lg">Order Summary Chart</div>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg"> Order Logs Table</div>
    </div>
  );
};

export default Dashboard;
