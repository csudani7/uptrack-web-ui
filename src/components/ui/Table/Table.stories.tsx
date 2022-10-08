// #Global Imports
import { storiesOf } from "@storybook/react";
// #end Global Imports

// #Local Imports
import { Table } from ".";
import { orderLogsColumnsData, orderLogsData } from "../../../utils";
// #Local Imports

//Simple Buttons
storiesOf("Components/Basic/Table", module).add("Default Table", () => {
  return (
    <div className="flex flex-col space-y-8">
      <Table data={orderLogsData} columns={orderLogsColumnsData} isPagination={false} />
    </div>
  );
});
