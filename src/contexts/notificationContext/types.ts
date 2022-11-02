export interface INotificationContext {
  changeText: (text: string) => void;
  date: Date | null;
  setDate: (time: any) => void;
}

export interface ISettings {
  text: string;
  date: Date | null;
  isOpen: boolean;
}
