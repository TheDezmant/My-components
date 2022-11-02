import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const FORMAT_MONTH = (date: Date) => {
  return format(date, "LLL", { locale: ru })
    .split("")
    .map((el, i) => (i === 0 ? el.toUpperCase() : el))
    .join("");
};
export const FORMAT_YEAR = (date: Date) => {
  return format(date, "uuuu");
};
