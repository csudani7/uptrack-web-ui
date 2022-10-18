//#Global Imports
import React from "react";
import moment from "moment";
import clsx from "clsx";
import {
  HorizontalGridLines,
  makeVisFlexible,
  VerticalBarSeries,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
//#end Global Imports

//#Local Imports
import SyncStatusCard from "./SyncStatusCard";
import { DatePicker } from "../../components/ui/DatePicker";
import InputBase from "../../components/ui/InputBase";
import { Table } from "../../components/ui/Table";
import { orderLogsColumnsData, orderLogsData, ordersData, selectDateRangeData } from "../../utils";
//#end Local Imports

const Dashboard = () => {
  const [isAutoSyncOn, setIsAutoSyncOn] = React.useState<boolean>(true);
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

  const useWindowSize = () => {
    const [size, setSize] = React.useState([0, 0]);
    React.useLayoutEffect(() => {
      function updateSize() {
        setSize([
          chartParentdiv?.current?.clientWidth || 400,
          chartParentdiv?.current?.clientHeight || 400,
        ]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  };

  const FlexibleXYPlot = makeVisFlexible(XYPlot);
  const [width, height] = useWindowSize();
  const chartParentdiv = React.useRef<HTMLDivElement>(null);

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
                  className={clsx(
                    index < ordersData?.length - 2 && "mb-5",
                    "flex items-center justify-between w-full p-5 bg-white rounded-lg lg:w-[47%]",
                  )}
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
        <div className="flex flex-col w-full space-y-5 md:w-1/2">
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
          {/* Orders Summary Bar Chart */}
          <div className="bg-white rounded-lg h-[298px] p-5" ref={chartParentdiv}>
            <div className="flex justify-between w-full mb-10">
              <div className="text-lg font-semibold text-black">Orders Summary</div>
              <div className="flex items-center gap-x-4">
                <div className="text-[10px] font-medium text-black flex items-center gap-x-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <div>Completed Orders</div>
                </div>
                <div className="text-[10px] font-medium text-black flex items-center gap-x-1">
                  <div className="w-2 h-2 rounded-full bg-red" />
                  <div>Unfullfilled Orders</div>
                </div>
              </div>
            </div>
            <FlexibleXYPlot
              width={width - 40}
              height={height - 100}
              stackBy="y"
              xDomain={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]}
              yDomain={[0, 5]}
              xType="ordinal"
            >
              <HorizontalGridLines />
              <XAxis
                style={{
                  text: { stroke: "none", fill: "#052142", fontWeight: 500, opacity: "0.2" },
                }}
              />
              <YAxis
                tickFormat={(v) => `${v}k`}
                tickValues={[0, 1, 2, 3, 4, 5]}
                hideLine
                style={{
                  text: { stroke: "none", fill: "#052142", fontWeight: 500, opacity: "0.2" },
                }}
              />
              <VerticalBarSeries
                barWidth={0.2}
                color="#EA5252"
                data={[
                  {
                    x: "Jan",
                    y: 1,
                  },
                  {
                    x: "Feb",
                    y: 1.7,
                  },
                  {
                    x: "Mar",
                    y: 1.3,
                  },
                  {
                    x: "Apr",
                    y: 1.5,
                  },
                  {
                    x: "May",
                    y: 1.1,
                  },
                  {
                    x: "Jun",
                    y: 1.3,
                  },
                  {
                    x: "Jul",
                    y: 1.8,
                  },
                  {
                    x: "Aug",
                    y: 1.7,
                  },
                  {
                    x: "Sep",
                    y: 1.5,
                  },
                  {
                    x: "Oct",
                    y: 1.9,
                  },
                  {
                    x: "Nov",
                    y: 2.1,
                  },
                  {
                    x: "Dec",
                    y: 2.2,
                  },
                ]}
                className="mr-1"
              />
              <VerticalBarSeries
                barWidth={0.2}
                color="#1EC26A"
                data={[
                  {
                    x: "Jan",
                    y: 1,
                  },
                  {
                    x: "Feb",
                    y: 1.5,
                  },
                  {
                    x: "Mar",
                    y: 1.5,
                  },
                  {
                    x: "Apr",
                    y: 1.4,
                  },
                  {
                    x: "May",
                    y: 1,
                  },
                  {
                    x: "Jun",
                    y: 1.3,
                  },
                  {
                    x: "Jul",
                    y: 1.9,
                  },
                  {
                    x: "Aug",
                    y: 1.6,
                  },
                  {
                    x: "Sep",
                    y: 1.4,
                  },
                  {
                    x: "Oct",
                    y: 2,
                  },
                  {
                    x: "Nov",
                    y: 2.1,
                  },
                  {
                    x: "Dec",
                    y: 2.5,
                  },
                ]}
                className="mr-1"
              />
            </FlexibleXYPlot>
          </div>
        </div>
      </div>
      {/* Orders log Table Section */}
      <div className="flex flex-col justify-between w-full p-5 bg-white rounded-lg gap-y-10">
        <div className="flex flex-col items-start justify-between lg:items-center md:flex-row gap-y-4 lg:gap-y-4">
          <div className="text-lg font-semibold text-black">Orders Log</div>
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
        </div>
        <Table data={orderLogsData} columns={orderLogsColumnsData} isPagination={false} />
      </div>
    </div>
  );
};

export default Dashboard;
