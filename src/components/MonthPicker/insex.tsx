import React, { FC } from "react";
import "./style.css";

import { FORMAT_MONTH, FORMAT_YEAR } from "./utils";
import { MonthPickerProps } from "./types";
import { isSameMonth, isWithinInterval } from "date-fns";
import useTheme from "../../hooks/useTheme";
import { useDate } from "./hooks/useDate";
import { useInterval } from "./hooks/useInterval";

const MonthPicker: FC<MonthPickerProps> = ({
  countColumnInInterest = 25,
  selectingInterval = false,
  open,
  setOpen,
  onSelect,
}) => {
  const { date, allMonthInYear, incrementYear, decrementYear } = useDate();

  const { interval, setValueInput, valueInput, onClickHandler } = useInterval(
    selectingInterval,
    onSelect
  );

  const { theme } = useTheme();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
  };

  const onClick = () => {
    setOpen(!open);
  };

  const getColor = (date: Date, color1: string, color2: string) => {
    if (
      isSameMonth(date, interval.from || 0) ||
      isSameMonth(date, interval.to || 0)
    )
      return color1;
    if (
      interval.from &&
      interval.to &&
      isWithinInterval(date, {
        start: interval.from,
        end: interval.to,
      })
    )
      return color2;
  };

  return (
    <div>
      <input
        placeholder={"Выберите месяцы..."}
        value={valueInput}
        onChange={onChangeHandler}
        onClick={onClick}
      />
      {open && (
        <div className={"m-container-month-picker"}>
          <div className={"m-head-month-picker"}>
            <div className={"m-change-year"} onClick={decrementYear}>
              {"<"}
            </div>
            <div>{FORMAT_YEAR(date)}</div>
            <div className={"m-change-year"} onClick={incrementYear}>
              {">"}
            </div>
          </div>
          <div className={"m-body-row"}>
            {allMonthInYear.map((date, i) => (
              <div
                onClick={() => onClickHandler(date)}
                key={i}
                className={"m-body-item"}
                style={{
                  backgroundColor: getColor(
                    date,
                    theme.colors.primary,
                    "lightgray"
                  ),
                  color: getColor(date, "white", theme.colors.primary),
                  width: `${countColumnInInterest}%`,
                }}
              >
                {FORMAT_MONTH(date)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthPicker;
