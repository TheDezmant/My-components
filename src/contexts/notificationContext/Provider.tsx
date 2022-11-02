import React, { useEffect, useState } from "react";
import notificationContext from ".";
import { ISettings } from "./types";
import Modal from "../../components/Modal";

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ text, date, isOpen }, setSettings] = useState<ISettings>({
    text: "",
    date: null,
    isOpen: false,
  });

  const setIsOpen = (isOpen: boolean) =>
    setSettings((prev) => ({ ...prev, isOpen }));

  useEffect(() => {
    if (date && text) {
      const timer = setInterval(() => {
        if (new Date() >= date) {
          clearInterval(timer);
          setIsOpen(true);
        }
      }, 1000);
    }
  }, [date, text]);

  const changeText = (text: string) => {
    setSettings((prev) => ({ ...prev, text }));
  };
  const setDate = (date: Date | null) => {
    setSettings((prev) => ({ ...prev, date }));
  };

  return (
    <notificationContext.Provider value={{ changeText, date, setDate }}>
      {children}
      <Modal open={isOpen} setOpen={setIsOpen} title="Уведомление" showButtons>
        <span>{text}</span>
      </Modal>
    </notificationContext.Provider>
  );
};

export default NotificationProvider;
