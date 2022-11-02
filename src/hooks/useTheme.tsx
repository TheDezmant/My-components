import React, { useContext } from "react";
import themeContext from "../contexts/themeContext";

const useTheme = () => useContext(themeContext);

export default useTheme;
