import React, { useEffect, useState } from "react";

import { endOfMonth } from "date-fns";
import { IIntervalMonth } from "../types";
import { FORMAT_MONTH, FORMAT_YEAR } from "../utils";

export const useInterval = (
  selectingInterval: boolean,
  onChange: (interval: IIntervalMonth) => void
) => {
  const [interval, setInterval] = useState<IIntervalMonth>({
    from: null,
    to: null,
  });

  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    if (selectingInterval) {
      if (interval.from && interval.to) {
        setValueInput(
          `${FORMAT_MONTH(interval.from)} ${FORMAT_YEAR(
            interval.from
          )} - ${FORMAT_MONTH(interval.to)} ${FORMAT_YEAR(interval.to)} `
        );
        return;
      }
    }
    if (interval.from) {
      setValueInput(
        `${FORMAT_MONTH(interval.from)} ${FORMAT_YEAR(interval.from)}`
      );
    }
  }, [interval]);

  const getSortedDate = (from: Date, to: Date) =>
    from.getTime() > to.getTime() ? { from: to, to: from } : { from, to };

  const onClickHandler = (date: Date) => {
    if (interval.to || !interval.from)
      return setInterval({ from: date, to: null });
    const { from, to } = getSortedDate(interval.from, date);
    setInterval({ from, to: endOfMonth(to) });
  };

  return {
    interval,
    setValueInput,
    valueInput,
    onClickHandler,
  };
};
