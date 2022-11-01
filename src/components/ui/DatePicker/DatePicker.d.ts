import { ReactElement } from "react";

declare namespace IDatePicker {
  export interface DatePickerProps {
    id?: string;
    bgDatePicker?: string;
    datepickerClassname?: string;
    selectedDate: string;
    dateChangeHandler: (value: string) => void;
    disabled?: boolean;
    maxDate?: string;
    minDate?: string;
    calendarIcon?: ReactElement;
  }
}

export { IDatePicker };
