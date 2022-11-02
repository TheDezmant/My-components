export interface TableProps<DataType> {
  columns: TableColumn<DataType>[];
  data: DataType[];
  isSelectable?: boolean;
  onChangeSelectedRows?: (selectedRows: DataType[]) => void;
  offset: number;
  setOffset: (item: number) => void;
  limit: number;
  setLimit: (item: number) => void;
}

export interface TableColumn<DataType> {
  title: string;
  accessor: ((field: DataType) => string) | keyof DataType;
}
