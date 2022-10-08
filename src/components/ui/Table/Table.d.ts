declare namespace ITable {
  export interface IProps {
    id?: string;
    data: Array<any>;
    columns: Array<{ Header: string; accessor: string }>;
    isPagination: boolean;
  }
}

export { ITable };
