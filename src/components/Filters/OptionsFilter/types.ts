export interface FilterOption {
  id: number;
  title: string;
}

export interface OptionsFilterProps {
  title: string;
  options: FilterOption[];
  selectedIds?: number[];
  onChange: (ids: number[]) => void;
}
