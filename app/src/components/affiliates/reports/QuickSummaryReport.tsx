import { FormLabel, Grid, GridItem } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useRouter } from "next/router";
import { useState } from "react";
import { DataTable } from "../../../components/common/data-table/DataTable";
import { QuerySelect } from "../../../components/common/QuerySelect";
import type { DashboardType } from "../../../server/db-types";
import { api } from "../../../utils/api";

export const QuickSummaryReport = () => {
  const router = useRouter();
  const page = parseInt(router?.query?.page as string);
  const items_per_page = parseInt(router?.query?.size as string);
  const { merchant_id, display } = router.query;
  const [displayType, setDisplayType] = useState("");
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const { data } = api.affiliates.getQuickReportSummary.useQuery({
    from: from,
    to: to,
    display: display ? String(display) : undefined,
    merchant_id: merchant_id ? Number(merchant_id) : 1,
  });
  const { data: merchants } = api.affiliates.getAllMerchants.useQuery();
  const columnHelper = createColumnHelper<DashboardType>();

  console.log("data ----->", data);
  console.log("merchants ----->", merchants);

  if (!data) {
    return null;
  }

  const columns = [
    columnHelper.accessor("MerchantId", {
      cell: (info) => info.getValue(),
      header: "Merchant",
    }),
    columnHelper.accessor("Impressions", {
      cell: (info) => info.getValue(),
      header: "Profile Name",
    }),
    columnHelper.accessor("Clicks", {
      cell: (info) => info.getValue(),
      header: "Clicks",
    }),
    columnHelper.accessor("Install", {
      cell: (info) => info.getValue(),
      header: "Installation",
      // meta: {
      //   isNumeric: true,
      // },
    }),
    columnHelper.accessor("click-through-ratio" as any, {
      cell: ({ row }) => {
        return row?.original?.RealAccount ? (
          <span>
            {(
              (row?.original?.Clicks ?? 0 / row.original.Impressions ?? 1) * 100
            ).toFixed(2)}
            %
          </span>
        ) : (
          <span></span>
        );
      },
      header: "Click Through Ratio(CTR)",
    }),
    columnHelper.accessor("click-to-account" as any, {
      cell: ({ row }) => {
        return row?.original?.RealAccount ? (
          <span>
            {(
              (row?.original?.RealAccount ?? 0 / row.original.Clicks ?? 1) * 100
            ).toFixed(2)}
            %
          </span>
        ) : (
          <span></span>
        );
      },
      header: "Click to Account",
    }),
    columnHelper.accessor("Leads", {
      cell: ({ row }) => {
        return row?.original?.FTD ? (
          <span>
            {(
              (row?.original?.FTD ?? 0 / row.original.Clicks ?? 1) * 100
            ).toFixed(2)}
            %
          </span>
        ) : (
          <span></span>
        );
      },
      header: "Click to Sale",
    }),
    columnHelper.accessor("Demo", {
      cell: (info) => info.getValue(),
      header: "Click to Sale",
    }),
    columnHelper.accessor("RealAccount", {
      cell: (info) => info.getValue(),
      header: "Accounts",
    }),
    columnHelper.accessor("FTD", {
      cell: (info) => info.getValue(),
      header: "FTD",
    }),
    columnHelper.accessor("Volume", {
      cell: (info) => info.getValue(),
      header: "Volume",
    }),
    columnHelper.accessor("Withdrawal", {
      cell: (info) => info.getValue(),
      header: "Withdrawal Amount",
    }),
    columnHelper.accessor("ChargeBack", {
      cell: (info) => info.getValue(),
      header: "ChargeBack Amount",
    }),
    columnHelper.accessor("ActiveTrader", {
      cell: (info) => info.getValue(),
      header: "Active Traders",
    }),
    columnHelper.accessor("Commission", {
      cell: ({ row }) => {
        console.log("row ---->", row);
        return <span>{row?.original?.Commission?.toFixed(2)}</span>;
      },
      header: "Commission",
    }),
  ];

  const merchant_options = merchants?.map((merchant) => {
    return {
      id: merchant.id,
      title: merchant?.name,
    };
  });

  const displayOptions = [
    {
      id: "monthly",
      title: "monthly",
    },
    {
      id: "weekly",
      title: "weekly",
    },
    {
      id: "daily",
      title: "daily",
    },
  ];

  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        alignContent={"center"}
        width="90%"
        alignItems={"center"}
        alignSelf="center"
      >
        <GridItem>
          <FormLabel>From</FormLabel>
          <SingleDatepicker date={from} onDateChange={setFrom} />
        </GridItem>
        <GridItem>
          <FormLabel>to</FormLabel>
          <SingleDatepicker date={to} onDateChange={setTo} />
        </GridItem>
        <GridItem>
          <QuerySelect
            label="Search Type"
            choices={displayOptions}
            varName="display"
          />
        </GridItem>
        <GridItem>
          <QuerySelect
            label="Merchant"
            choices={merchant_options}
            varName="merchant_id"
          />
        </GridItem>
      </Grid>
      <h2>Quick Summary Report</h2>
      <Grid
        alignContent={"center"}
        alignItems={"center"}
        width="100%"
        alignSelf="center"
        overflow={"scroll"}
      >
        <DataTable data={Object.values(data)} columns={columns} />
      </Grid>
    </>
  );
};
