import { createContext } from "react";
import { IThemeContext } from "./types";
import { skyTheme } from "../../themes";

const themeContext = createContext<IThemeContext>({
  theme: skyTheme,
  changeTheme: () => null,
});

export default themeContext;
