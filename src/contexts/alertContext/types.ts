import { AlertType } from "../../components/Alert/types";

export interface IAlertSettings {
  isOpen: boolean;
  title: string;
  type?: AlertType;
}
export interface IAlertContext {
  showAlert: (title: string, type?: AlertType) => void;
}
