export interface IIntervalMonth {
  from: Date | null;
  to: Date | null;
}
export interface MonthPickerProps {
  countColumnInInterest?: number;
  selectingInterval?: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  onSelect: (interval: IIntervalMonth) => void;
}
