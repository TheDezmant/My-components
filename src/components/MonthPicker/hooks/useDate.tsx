import React, { useEffect, useState } from "react";
import { add, eachMonthOfInterval, endOfYear, startOfYear } from "date-fns";

export const useDate = () => {
  const [date, setDate] = useState(new Date());
  const [allMonthInYear, setAllMonthInYear] = useState<Date[]>([]);

  useEffect(() => {
    const start = startOfYear(date);
    const end = endOfYear(date);
    const allMonths = eachMonthOfInterval({ start, end });
    setAllMonthInYear(allMonths);
  }, [date]);

  const incrementYear = () => {
    setDate((prev) => add(prev, { years: 1 }));
  };
  const decrementYear = () => {
    setDate((prev) => add(prev, { years: -1 }));
  };

  return { date, allMonthInYear, incrementYear, decrementYear };
};
