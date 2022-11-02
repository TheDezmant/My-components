export interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

export type ColorVariants =
  | "primary"
  | "secondary"
  | "warning"
  | "error"
  | "info";
