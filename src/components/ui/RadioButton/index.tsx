//#Global Imports
import React from "react";
import IRadiobuttonProps from "./RadioButton";
//#end Global Imports

const RadioButton: React.FC<IRadiobuttonProps.IProps> = ({ label, onChangeHandler, value }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        value={value}
        name="setting-list"
        className="w-4 h-4 text-blue-100 border-2 border-gray-300 cursor-pointer accent-blue-100"
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      {label && (
        <label className="ml-2 text-base font-medium text-black dark:text-gray-300">{label}</label>
      )}
    </div>
  );
};

export default RadioButton;
