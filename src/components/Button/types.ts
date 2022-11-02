import { ColorVariants } from "../../themes/types";

export interface ButtonProps {
  color?: ColorVariants;
  onClick: () => void;
  variant?: "outlined" | "contained";
  children: React.ReactNode;
}
