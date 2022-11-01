//#Global imports
import React from "react";
import moment from "moment";
import clsx from "clsx";
//#end Global Imports

//#Local Imports
import { orderIdNumbers, syncModeTypeData } from "../../utils";
import ToggleButton from "../../components/ui/ToggleButton";
import Button from "../../components/ui/Button";
import { DatePicker } from "../../components/ui/DatePicker";
import InputBase from "../../components/ui/InputBase";
import { DatePickerIcon, InfoIcon } from "../../assests/icons";
//#end Local Imports

const SyncMode = () => {
  const [syncModeType, setSyncModeType] = React.useState<string>("automatic-intelligence");
  const [selectedStartDate, setSelecteStartdDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [selectedEndDate, setSelecteEnddDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [isAutomaticSync, setIsAutomaticSync] = React.useState<string>("Yes");
  const [isOverWriteTraking, setIsOverWriteTracking] = React.useState<string>("Yes");
  const [isNotifyBuyer, setIsNotifyBuyer] = React.useState<string>("No");
  const [orderId, setOrderId] = React.useState<string>("");

  const orderIdLabel = (
    <div className="flex items-center gap-[6px] text-black font-medium text-sm">
      Order ID: <InfoIcon />
    </div>
  );

  const handleStartDateChange = (value: string) => {
    setSelecteStartdDate(value);
  };

  const handleEndDateChange = (value: string) => {
    setSelecteEnddDate(value);
  };

  return (
    <div className="flex flex-col items-start w-full p-4 bg-white rounded-lg md:p-10 lg:gap-y-10 gap-y-6">
      <div className="text-sm font-semibold text-black md:text-lg">
        How do you want to sync your orders?
      </div>
      <div className="flex flex-col items-center justify-start w-full md:items-start lg:items-center lg:flex-row gap-x-10 gap-y-4 lg:gap-y-0">
        {syncModeTypeData?.map((data, index) => {
          return (
            <div
              key={index}
              className={clsx(
                syncModeType === data?.value ? "border border-blue-100 " : "opacity-50",
                "flex lg:flex-col items-center p-2 lg:p-5 bg-white-200 rounded-lg gap-y-6 cursor-pointer min-w-full md:min-w-[240px] lg:min-w-[192px] xl:min-w-[240px] gap-x-4 lg:gap-x-0",
              )}
              onClick={() => setSyncModeType(data?.value)}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full lg:h-12 lg:w-12 bg-gradient-to-t from-smoky to bg-blue">
                {data?.icon}
              </div>
              <div className="text-sm font-medium text-transparent xl:text-lg bg-clip-text bg-gradient-to-r from-smoky to bg-blue">
                {data?.label}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-start gap-y-6">
        {syncModeType === "automatic-intelligence" && (
          <>
            <div className="text-sm font-medium text-black text-opacity-50 lg:text-base">
              Your data will be updated automatically.
            </div>
            <div className="flex flex-col items-start">
              <div className="text-xs lg:text-sm font-medium text-black mb-[10px]">
                Do you want to run automatic intelligence?
              </div>
              <ToggleButton
                currentValue={isAutomaticSync}
                setCurrentValue={setIsAutomaticSync}
                rightLabel="No"
                leftlabel="Yes"
                bgColor="bg-gradient-to-r from-smoky to bg-blue"
                width="w-16"
              />
            </div>
          </>
        )}
        {syncModeType === "date-range" && (
          <>
            <div className="text-sm font-medium text-black text-opacity-50 lg:text-base">
              Your data will be updated based on the date Range
            </div>
            <div className="flex flex-wrap items-center gap-2 lg:gap-4">
              <DatePicker
                datepickerClassname="!w-[140px]"
                selectedDate={selectedStartDate}
                dateChangeHandler={handleStartDateChange}
                calendarIcon={<DatePickerIcon />}
              />
              <div className="text-xs font-medium text-opacity-50 lg:text-base text-gray-150">
                To
              </div>
              <DatePicker
                datepickerClassname="!w-[140px]"
                selectedDate={selectedEndDate}
                dateChangeHandler={handleEndDateChange}
                calendarIcon={<DatePickerIcon />}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-sm font-medium text-black mb-[10px]">
                Over-write Already Synced Trackings:
              </div>
              <ToggleButton
                currentValue={isOverWriteTraking}
                setCurrentValue={setIsOverWriteTracking}
                rightLabel="No"
                leftlabel="Yes"
                bgColor="bg-gradient-to-r from-smoky to bg-blue"
                width="w-16"
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-sm font-medium text-black mb-[10px]">
                Notify buyer about update via email:
              </div>
              <ToggleButton
                currentValue={isNotifyBuyer}
                setCurrentValue={setIsNotifyBuyer}
                rightLabel="No"
                leftlabel="Yes"
                bgColor="bg-gradient-to-r from-smoky to bg-blue"
                width="w-16"
              />
            </div>
          </>
        )}
        {syncModeType === "order-id" && (
          <>
            <div className="text-sm font-medium text-black text-opacity-50 lg:text-base">
              Your data will be updated based on the Order ID{" "}
            </div>
            <div className="w-auto lg:w-[507px]">
              <InputBase
                type="number"
                className="mb-4"
                name="orderId"
                label={orderIdLabel}
                placeholder="Fill in the Orders Ids separated by commas..."
                fullWidth={true}
                value={orderId}
                onChange={(event) => setOrderId(event.target.value)}
                placeholderClass="lg:placeholder:text-base placeholder:text-[10px]"
              />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-2">
              {orderIdNumbers?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-200 py-[3px] px-3 rounded-[1000px] gap-x-1 flex items-center justify-center cursor-pointer"
                    onClick={() => setOrderId(data?.value)}
                  >
                    <span>{data?.icon}</span>
                    <span className="text-sm font-medium text-black">{data?.label}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
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
          rootClassName="py-2 px-[18px]"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default SyncMode;
