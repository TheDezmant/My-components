import React, { useContext } from "react";
import notificationContext from "../contexts/notificationContext";

const useNotification = () => useContext(notificationContext);

export default useNotification;
