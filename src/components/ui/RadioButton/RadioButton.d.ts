declare namespace IRadiobuttonProps {
  export interface IProps {
    label?: string;
    value: string | number | readonly string[] | undefined;
    onChangeHandler: (e: any) => void;
  }
}

export default IRadiobuttonProps;
