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

const formatValue = (
  from: Date | null | undefined,
  to: Date | null | undefined
) => {
  return `${format(
    from || sub(new Date(), { months: 6 }),
    "yyyyMMdd"
  )}-${format(to || new Date(), "yyyyMMdd")}`;
};

const getPredefinedDateRange = (value: DateRange): string | undefined => {
  console.log(`muly:handleSelectDateRange ${value}`, {});
  const today = new Date();
  let range: string | undefined = undefined;
  if (value === "today") {
    range = formatValue(today, today);
  } else if (value === "yesterday") {
    const yesterday = sub(today, { days: 1 });
    range = formatValue(yesterday, yesterday);
  } else if (value === "this-week") {
    range = formatValue(startOfWeek(today), today);
  } else if (value === "month-to-date") {
    range = formatValue(startOfMonth(today), today);
  } else if (value === "last-month") {
    range = formatValue(
      startOfMonth(sub(today, { months: 1 })),
      endOfMonth(sub(today, { months: 1 }))
    );
  } else if (value === "last-6-month") {
    range = formatValue(
      startOfMonth(sub(today, { months: 6 })),
      endOfMonth(sub(today, { months: 1 }))
    );
  } else if (value === "year-to-date") {
    range = formatValue(startOfYear(today), today);
  } else if (value === "last-year") {
    range = formatValue(
      startOfYear(sub(today, { years: 1 })),
      endOfYear(sub(today, { years: 1 }))
    );
  } else if (value === "custom") {
  }

  return range;
};

const getDateRange = (value?: string) => {
  const [fromS, toS] = (value || "").split("-");
  const defaultFrom = sub(new Date(), { months: 6 });
  const defaultTo = new Date();

  const from = parse(fromS || "", "yyyyMMdd", new Date());
  const to = parse(toS || "", "yyyyMMdd", new Date());
  return {
    from: startOfDay(isNaN(from.getTime()) ? defaultFrom : from),
    to: endOfDay(isNaN(to.getTime()) ? defaultTo : to),
  };
};

interface Props {
  range?: DateRange;
}

export const useDateRange = (defaultRange?: DateRange) => {
  const router = useRouter();
  const { dates } = router.query;

  const range = defaultRange || "last-6-month";
  const value = String(dates) || getPredefinedDateRange(range);

  return getDateRange(value);
};

export const DateRangeSelect = ({ range: defaultRange }: Props) => {
  const range = defaultRange || "last-6-month";
  const [rangeName, setRangeName] = useState<CustomDateRange>(range);
  const [value, setValue] = useQueryState(
    "dates",
    queryTypes.string.withDefault(getPredefinedDateRange(range) || "")
  );

  const { from, to } = getDateRange(value);

  const setDateRange = async (from: Date | null, to: Date | null) => {
    setRangeName("custom");
    return setValue(formatValue(from, to));
  };

  const handleSelectDateRange = async (value: DateRange) => {
    const range = getPredefinedDateRange(value);
    if (range) {
      await setValue(range);
      setRangeName(value);
    }
  };

  console.log(`muly:DateRangeSelect render`, { from, to });

  return (
    <FormControl>
      <FormLabel>Date Range</FormLabel>
      <HStack>
        <Select
          minW={40}
          placeholder="Select date range"
          value={rangeName}
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
