import { AlertSettings, AlertType } from "./types";
import { ITheme } from "../../themes/types";
import {
  MdErrorOutline as ErrorIcon,
  MdWarningAmber as WarningIcon,
  MdCheckCircleOutline as SuccessIcon,
  MdInfoOutline as InfoIcon,
} from "react-icons/md";
import React from "react";

export const getAlertSettings = (
  type: AlertType,
  theme: ITheme
): AlertSettings => {
  const ICON_SIZE = 22;

  switch (type) {
    case "error":
      return {
        icon: <ErrorIcon size={ICON_SIZE} />,
        background: theme.colors.error,
      };
    case "warning":
      return {
        icon: <WarningIcon size={ICON_SIZE} />,
        background: theme.colors.warning,
      };
    case "success":
      return {
        icon: <SuccessIcon size={ICON_SIZE} />,
        background: theme.colors.success,
      };
  }

  return { icon: <InfoIcon size={ICON_SIZE} />, background: theme.colors.info };
};
