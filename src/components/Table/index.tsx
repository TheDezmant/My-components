import React, { useEffect, useState } from "react";
import "./style.css";
import { TableProps } from "./types";
import LimitDropdown from "./Dropdowns/LimitDropdown/LimitDropdown";

const dataCount = 10;

function Table<DataType>({
  data,
  columns,
  isSelectable,
  onChangeSelectedRows,
  setOffset,
  offset,
  limit,
  setLimit,
}: TableProps<any>) {
  const [selectedRowsIndexes, setSelectedRowsIndexes] = useState<number[]>([]);
  const [showLimitDropdown, setShowLimitDropdown] = useState(false);

  const changeIsSelectedRow = (index: number) => {
    const found = selectedRowsIndexes.find((i) => i === index) !== undefined;
    setSelectedRowsIndexes((prev) =>
      found ? prev.filter((i) => index !== i) : [...prev, index]
    );
  };

  useEffect(() => {
    if (onChangeSelectedRows && data.length) {
      onChangeSelectedRows(
        data.filter((_, i) => selectedRowsIndexes.includes(i))
      );
    }
  }, [selectedRowsIndexes, onChangeSelectedRows, data]);

  const switchLeft = () => {
    setOffset(offset <= 0 ? offset : offset - limit);
  };
  const switchRight = () => {
    setOffset(offset + limit >= dataCount ? offset : offset + limit);
  };

  return (
    <>
      <div className="mtable-container">
        <table className="mtable">
          <thead>
            <tr className="mrow-container">
              {isSelectable && <th />}
              {columns.map((column) => (
                <th key={column.title}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="mrow-container">
                {isSelectable && (
                  <td className="mcheckbox-column">
                    <input
                      type="checkbox"
                      checked={
                        selectedRowsIndexes.find((index) => index === i) !==
                        undefined
                      }
                      onChange={() => changeIsSelectedRow(i)}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.title}>
                    {typeof column.accessor === "function"
                      ? column.accessor(item)
                      : item[column.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={"mtfoot"}>
        <div className={"wrapper_mselect_amount_row"}>
          <span>Rows per page:</span>
          <button
            className={"mselect_amount_row"}
            onClick={() => setShowLimitDropdown(!showLimitDropdown)}
          >
            {limit}
          </button>
          {showLimitDropdown && (
            <LimitDropdown
              setOffset={setOffset}
              setLimit={setLimit}
              setShowLimitDropdown={setShowLimitDropdown}
            />
          )}
        </div>
        <div className={"counter_page"}>
          {offset + 1}-
          {limit + offset <= dataCount ? limit + offset : dataCount} of{" "}
          {dataCount}
        </div>
        <button
          className={offset <= 0 ? "disable_mswitch-left" : "mswitch-left"}
          disabled={offset <= 0}
          onClick={switchLeft}
        >
          {"<"}
        </button>
        <button
          className={
            offset + limit >= dataCount
              ? "disable_mswitch-left"
              : "mswitch-right"
          }
          disabled={offset + limit >= dataCount}
          onClick={switchRight}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Table;
