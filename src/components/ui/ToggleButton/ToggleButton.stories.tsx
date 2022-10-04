// #Global Imports
import React from "react";
import { storiesOf } from "@storybook/react";
// #end Global Imports

// #Local Imports
import ToggleButton from ".";
// #Local Imports

//Simple Buttons
storiesOf("Components/Basic/Toggle-Button", module).add("Default Toggle", () => {
  const [currentValue, setCurrentValue] = React.useState<string>("Yes");
  return (
    <div className="flex flex-col space-y-8">
      <ToggleButton
        currentValue={currentValue}
        setCurrentValue={setCurrentValue}
        rightLabel="No"
        leftlabel="Yes"
        bgColor="bg-gradient-to-r from-smoky to bg-blue"
        width="w-16"
      />
    </div>
  );
});
