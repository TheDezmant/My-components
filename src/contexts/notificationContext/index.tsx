import { createContext } from "react";
import { INotificationContext } from "./types";

const notificationContext = createContext<INotificationContext>({
  changeText: () => null,
  date: null,
  setDate: () => null,
});

export default notificationContext;
