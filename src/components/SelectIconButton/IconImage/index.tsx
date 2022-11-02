import React from "react";
import * as materialDesignIcons from "react-icons/md";
import { IconImageProps } from "./types";

const IconImage = ({ name, iconProps }: IconImageProps) => {
  const MDIcon = materialDesignIcons[name];
  return <MDIcon {...iconProps} />;
};

export default IconImage;
