import * as materialDesignIcons from "react-icons/md";
import { IconBaseProps } from "react-icons/lib/cjs/iconBase";

export type IconName = keyof typeof materialDesignIcons;

export interface IconImageProps {
  name: IconName;
  iconProps?: IconBaseProps;
}
