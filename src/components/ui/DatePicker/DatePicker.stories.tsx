import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";

import { DatePicker } from ".";

storiesOf("Components/Basic/DatePicker", module).add("Simple", () => {
  const [selectedDate, setSelectedDate] = React.useState(moment(new Date()).format());
  const handleDateChange = (value: string) => {
    setSelectedDate(value);
  };
  return <DatePicker selectedDate={selectedDate} dateChangeHandler={handleDateChange} />;
});
