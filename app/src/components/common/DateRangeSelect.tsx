import { Box, FormControl, FormLabel, HStack, Select } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import {
  endOfDay,
  endOfMonth,
  endOfYear,
  format,
  parse,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  sub,
} from "date-fns";
import { queryTypes, useQueryState } from "next-usequerystate";
import { useRouter } from "next/router";

type DateRange =
  | "today"
  | "yesterday"
  | "this-week"
  | "month-to-date"
  | "last-month"
  | "last-6-month"
  | "year-to-date"
  | "last-year";

type CustomDateRange = DateRange | "custom";

const formatValueDateRange = (
  from: Date | null | undefined,
  to: Date | null | undefined
) => {
  return `${format(
    from || sub(new Date(), { months: 6 }),
    "yyyyMMdd"
  )}-${format(to || new Date(), "yyyyMMdd")}`;
};

const getPredefinedDateRange = (value?: string | null) => {
  const setRange = (value: CustomDateRange, from: Date, to: Date) => ({
    name: value,
    from,
    to,
  });

  console.log(`muly:handleSelectDateRange ${value}`, {});
  const today = new Date();
  let range;
  if (value === "today") {
    range = setRange(value, today, today);
  } else if (value === "yesterday") {
    const yesterday = sub(today, { days: 1 });
    range = setRange(value, yesterday, yesterday);
  } else if (value === "this-week") {
    range = setRange(value, startOfWeek(today), today);
  } else if (value === "month-to-date") {
    range = setRange(value, startOfMonth(today), today);
  } else if (value === "last-month") {
    range = setRange(
      value,
      startOfMonth(sub(today, { months: 1 })),
      endOfMonth(sub(today, { months: 1 }))
    );
  } else if (value === "year-to-date") {
    range = setRange(value, startOfYear(today), today);
  } else if (value === "last-year") {
    range = setRange(
      value,
      startOfYear(sub(today, { years: 1 })),
      endOfYear(sub(today, { years: 1 }))
    );
  } /* if (value === "last-6-month") */ else {
    range = setRange(
      "last-6-month",
      startOfMonth(sub(today, { months: 6 })),
      endOfMonth(sub(today, { months: 1 }))
    );
  }

  return range;
};

const getDateRange = (value?: string) => {
  let range;
  const regex = /^(\d{8})-(\d{8})$/gm;

  if (value && regex.exec(value)) {
    console.log(`muly:getDateRange parse dates, are they? ${value}`, {
      re: regex.exec(value),
    });
    const [fromS, toS] = (value || "").split("-");

    const from = parse(fromS || "", "yyyyMMdd", new Date());
    const to = parse(toS || "", "yyyyMMdd", new Date());

    if (isNaN(from.getTime()) || isNaN(to.getTime())) {
      range = getPredefinedDateRange("last-6-month");
    } else {
      range = {
        name: "custom",
        from,
        to,
      };
    }
  } else {
    range = getPredefinedDateRange(value);
  }

  return {
    name: range.name,
    from: startOfDay(range.from),
    to: endOfDay(range.to),
  };
};

interface Props {
  range?: DateRange;
}

export const useDateRange = (defaultRange?: DateRange) => {
  const router = useRouter();
  const { dates } = router.query;

  const value = String(dates);
  return getDateRange(value || defaultRange || "last-6-month");
};

export const DateRangeSelect = ({ range: defaultRange }: Props) => {
  const range = defaultRange || "last-6-month";
  const [value, setValue] = useQueryState(
    "dates",
    queryTypes.string.withDefault(range)
  );

  const { name, from, to } = getDateRange(value);

  const setDateRange = async (from: Date | null, to: Date | null) => {
    return setValue(formatValueDateRange(from, to));
  };

  const handleSelectDateRange = async (value: DateRange) => {
    await setValue(value);
  };

  console.log(`muly:DateRangeSelect render ${name}`, { from, to });

  return (
    <FormControl>
      <FormLabel>Date Range</FormLabel>
      <HStack>
        <Select
          minW={40}
          placeholder="Select date range"
          value={name}
          onChange={(event) => {
            if (event.target.value !== "custom") {
              void handleSelectDateRange(event.target.value as DateRange);
            }
          }}
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="this-week">This Week</option>
          <option value="month-to-date">Month to Date</option>
          <option value="last-month">Last Month</option>
          <option value="last-6-month">Last 6 Month</option>
          <option value="year-to-date">Year to Date</option>
          <option value="last-year">Last Year</option>
          <option value="custom">Custom</option>
        </Select>
        <DatePicker
          selected={from}
          onChange={(date) => setDateRange(date, to)}
        />
        <DatePicker
          selected={to}
          onChange={(date) => setDateRange(from, date)}
        />
      </HStack>
    </FormControl>
  );
};
