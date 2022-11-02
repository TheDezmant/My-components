import React, { useEffect, useState } from "react";
import "./styles.css";
import { AlertProps, AlertSettings } from "./types";
import useTheme from "../../hooks/useTheme";
import { getAlertSettings } from "./utils";
import { getContrastColor } from "../../utils";

const Alert: React.FC<AlertProps> = ({ title, isOpen, type = "info" }) => {
  const { theme } = useTheme();
  const [{ icon, background }, setSettings] = useState<AlertSettings>({
    icon: getAlertSettings(type, theme).icon,
    background: theme.colors.info,
  });

  useEffect(() => {
    setSettings(getAlertSettings(type, theme));
  }, [type, theme]);

  return (
    <div
      className={`alert-wrapper ${isOpen ? "alert-open" : ""}`}
      style={{
        background,
        color: getContrastColor(background),
      }}
    >
      {icon}
      <span className="alert-text">{title}</span>
    </div>
  );
};

export default Alert;
