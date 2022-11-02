import React, { useEffect, useState } from "react";
import themeContext from ".";
import { themes, skyTheme } from "../../themes";
import { ITheme } from "../../themes/types";
import { LS_THEME } from "../../constants/global";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ITheme>(skyTheme);

  useEffect(() => {
    const lsThemeName = localStorage.getItem(LS_THEME);
    if (lsThemeName) changeTheme(lsThemeName);
  }, []);

  const changeTheme = (title: string) => {
    const foundTheme = themes.find((theme) => theme.title === title);
    if (!foundTheme) return;

    localStorage.setItem(LS_THEME, title);
    setTheme(foundTheme);
  };

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
