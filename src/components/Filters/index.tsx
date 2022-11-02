import React, { useEffect, useState } from "react";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { filterNames, FilterValues } from "./types";
import useQuery from "../../hooks/useQuery";
import OptionsFilter from "./OptionsFilter";
import { brands, colors } from "./mockDb";
import RangeFilter from "./RangeFilter";

const Filters = () => {
  const query = useQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const [filterValues, setFilterValues] = useState<FilterValues>({});

  useEffect(() => {
    setFilterValues((prev) => ({
      ...prev,

      ...(query.get(filterNames.BRAND_IDS) && {
        [filterNames.BRAND_IDS]: query
          .get(filterNames.BRAND_IDS)
          ?.split(",")
          .map(Number),
      }),
      ...(query.get(filterNames.COLOR_IDS) && {
        [filterNames.COLOR_IDS]: query
          .get(filterNames.COLOR_IDS)
          ?.split(",")
          .map(Number),
      }),
      ...(query.get(filterNames.PRICE) && {
        [filterNames.PRICE]: Number(query.get(filterNames.PRICE)),
      }),
    }));
  }, [query]);

  const applyFilters = () => {
    navigate(
      `${location.pathname}?` +
        Object.entries(filterValues)
          .filter((key, value) => value !== undefined)
          .map(([key, value]) => `${[key]}=${value}`)
          .join("&")
    );
  };

  const applyFilter = (
    name: keyof FilterValues,
    values: FilterValues[typeof name]
  ) => {
    setFilterValues((prev) => ({
      ...prev,
      [name]: values,
    }));
  };

  return (
    <div className="filters-wrapper">
      <h2>Фильтры</h2>
      <OptionsFilter
        title="Брэнд"
        options={brands}
        selectedIds={filterValues.brandIds}
        onChange={(ids) => applyFilter(filterNames.BRAND_IDS, ids)}
      />
      <OptionsFilter
        title="Цвет"
        options={colors}
        selectedIds={filterValues.colorIds}
        onChange={(ids) => applyFilter(filterNames.COLOR_IDS, ids)}
      />
      <RangeFilter
        title="Цена"
        min={0}
        max={100}
        value={filterValues.price}
        onChange={(value) => applyFilter(filterNames.PRICE, value)}
      />

      <button onClick={applyFilters}>Применить</button>
    </div>
  );
};

export default Filters;
