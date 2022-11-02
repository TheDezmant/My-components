export interface RangeFilterProps {
  title: string;
  value?: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}
