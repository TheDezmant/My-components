import React, { useEffect, useState } from "react";
import alertContext from ".";
import Alert from "../../components/Alert";
import { AlertType } from "../../components/Alert/types";
import { IAlertSettings } from "./types";

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ isOpen, title, type }, setSettings] = useState<IAlertSettings>({
    isOpen: false,
    title: "",
    type: "info",
  });

  const showAlert = (title: string, type?: AlertType) => {
    setSettings({ isOpen: true, title, type });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(
        () => setSettings((prev) => ({ ...prev, isOpen: false })),
        3000
      );
    }
  }, [isOpen]);

  return (
    <alertContext.Provider value={{ showAlert }}>
      {children}
      <Alert title={title} isOpen={isOpen} type={type} />
    </alertContext.Provider>
  );
};

export default AlertProvider;
