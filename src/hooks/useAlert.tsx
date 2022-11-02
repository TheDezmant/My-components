import React, { useContext } from "react";
import alertContext from "../contexts/alertContext";

const useAlert = () => useContext(alertContext);

export default useAlert;
