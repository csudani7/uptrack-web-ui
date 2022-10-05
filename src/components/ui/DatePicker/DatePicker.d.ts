declare namespace IDatePicker {
  export interface DatePickerProps {
    id?: string;
    bgDatePicker?: string;
    datepickerClassname?: string;
    selectedDate: string;
    dateChangeHandler: React.Dispatch<React.SetStateAction<string>>;
    disabled?: boolean;
    maxDate?: string;
    minDate?: string;
  }
}

export { IDatePicker };
