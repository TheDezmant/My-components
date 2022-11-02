import React, { ChangeEvent } from "react";
import "./styles.css";
import { RangeFilterProps } from "./types";

const RangeFilter: React.FC<RangeFilterProps> = ({
  title,
  value = 0,
  min,
  max,
  onChange,
}) => {
  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="filter-wrapper">
      <h3>{title}</h3>
      <div>
        <label>
          <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onChangeFilter}
          />
          {value}
        </label>
      </div>
    </div>
  );
};

export default RangeFilter;
