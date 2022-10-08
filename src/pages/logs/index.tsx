//#Global imports
import React from "react";
import moment from "moment";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { orderLogsColumnsData, orderLogsData, selectDateRangeData } from "../../utils";
import { DatePicker } from "../../components/ui/DatePicker";
import InputBase from "../../components/ui/InputBase";
import { Table } from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import { DownloadIcon } from "../../assests/icons";
//#end Local Imports

const Logs = () => {
  const [selectedDateRange, setSelectedDateRange] = React.useState<string>("last-15-days");
  const [selectedStartDate, setSelecteStartdDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [selectedEndDate, setSelecteEnddDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [searchedOrder, setSearchedOrder] = React.useState<string>("");

  const handleStartDateChange = (value: string) => {
    setSelecteStartdDate(value);
  };

  const handleEndDateChange = (value: string) => {
    setSelecteEnddDate(value);
  };

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
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col items-start w-full p-5 bg-white rounded-lg gap-y-10">
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
          <div className="text-xs font-medium text-opacity-50 lg:text-base text-gray-150">To</div>
          <DatePicker
            datepickerClassname="w-28 lg:w-auto"
            selectedDate={selectedEndDate}
            dateChangeHandler={handleEndDateChange}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full p-5 bg-white rounded-lg gap-y-10">
        <div className="flex flex-col items-start justify-between lg:items-center md:flex-row gap-y-4 lg:gap-y-4">
          <div className="text-lg font-semibold text-black">Orders Log</div>
          <div className="flex items-center gap-x-[10px] w-fit">
            <div>
              <InputBase
                name="searchOrder"
                isSearch={true}
                placeholder="Search your order...."
                onChange={(e) => setSearchedOrder(e.target.value)}
                fullWidth={true}
                value={searchedOrder}
              />
            </div>
            <div>
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
                preffixIcon={<DownloadIcon />}
                rootClassName="py-2 px-4 w-auto"
              >
                Export CSV
              </Button>
            </div>
          </div>
        </div>
        <Table data={orderLogsData} columns={orderLogsColumnsData} isPagination={true} />
      </div>
    </div>
  );
};

export default Logs;
