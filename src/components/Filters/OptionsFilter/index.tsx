import React from "react";
import "./styles.css";
import { OptionsFilterProps } from "./types";

const OptionsFilter: React.FC<OptionsFilterProps> = ({
  title,
  options,
  selectedIds = [],
  onChange,
}) => {
  const onChangeFilter = (clickedId: number) => {
    if (selectedIds.includes(clickedId)) {
      onChange(selectedIds.filter((id) => id !== clickedId));
    } else {
      onChange([...selectedIds, clickedId]);
    }
  };

  return (
    <div className="filter-wrapper">
      <h3>{title}</h3>
      {options.map(({ id, title }) => (
        <div key={id}>
          <label>
            <input
              type="checkbox"
              checked={selectedIds.includes(id)}
              onChange={() => onChangeFilter(id)}
            />
            {title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default OptionsFilter;
