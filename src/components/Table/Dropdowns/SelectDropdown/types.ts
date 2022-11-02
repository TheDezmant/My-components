import { TableColumn } from "../../types";

export interface SelectDropdownProps<DataType> {
  selectedColumnsTitle: string[];
  setSelectedColumnsTitle: (item: any) => void;
  columns: TableColumn<DataType>[];
}
