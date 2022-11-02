import { createContext } from "react";
import { IAlertContext } from "../../contexts/alertContext/types";

const alertContext = createContext<IAlertContext>({ showAlert: () => null });

export default alertContext;
