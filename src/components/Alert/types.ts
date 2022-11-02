export type AlertType = "error" | "warning" | "info" | "success";
export interface AlertProps {
  type?: AlertType;
  title: string;
  isOpen: boolean;
}

export interface AlertSettings {
  icon: JSX.Element;
  background: string;
}
