import { z } from "zod";

import { publicProcedure } from "../../trpc";
import type { merchants_creative_type, Prisma } from "@prisma/client";
import { affiliate_id, merchant_id } from "./const";
import type { queryRawId } from "../../../db-utils";

export const getDashboard = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.dashboard.groupBy({
    by: ["merchant_id"],
    where: {
      merchant_id: merchant_id ? merchant_id : 1,
      affiliate_id,
    },
    _sum: {
      Clicks: true,
      Impressions: true,
      Install: true,
      Leads: true,
      Demo: true,
      RealAccount: true,
      FTD: true,
      FTDAmount: true,
      Deposits: true,
      DepositsAmount: true,
      Bonus: true,
      RawFTD: true,
      RawFTDAmount: true,
      Withdrawal: true,
      ChargeBack: true,
      NetDeposit: true,
      PNL: true,
      ActiveTrader: true,
      Commission: true,
      PendingDeposits: true,
      PendingDepositsAmount: true,
    },
  });

  return data;
});

export const getTopMerchantCreative = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.merchants_creative.findMany({
    where: {
      merchant_id,
      valid: 1,
      affiliateReady: 1,
      featured: 1,
      NOT: {
        file: {
          contains: "%tmp%",
        },
      },
    },
    include: {
      merchant: {
        select: { name: true },
      },
      language: {
        select: { title: true },
      },
      category: { select: { categoryname: true } },
    },
    orderBy: {
      id: "desc",
    },
    take: 5,
  });

  return data;
});

export const getPerformanceChart = publicProcedure.query(async ({ ctx }) => {
  const date = new Date();
  let dateList = [];
  for (let i = 0; i < 5; i++) {
    const temp = {
      year: `${date.getFullYear()}`,
      month:
        date.getMonth() + 1 > 9
          ? `${date.getMonth() + 1}`
          : `0${date.getMonth() + 1}`,
      label: date.toLocaleString("en-US", { month: "short" }),
    };
    dateList[i] = temp;
    date.setMonth(date.getMonth() - 1);
  }
  dateList = dateList.reverse();
  console.log("date list:", dateList);

  return await Promise.all(
    dateList.map(async (item) => {
      const data = await ctx.prisma.dashboard.groupBy({
        by: ["merchant_id"],
        where: {
          affiliate_id,
          merchant_id: merchant_id ? merchant_id : 1,
          Date: {
            gte: new Date(`${item.year}-${item.month}-01`),
            lte: new Date(`${item.year}-${item.month}-31`),
          },
        },
        _sum: {
          FTD: true,
          RealAccount: true,
        },
      });
      console.log("data->>>>>>>>>>>>", data);
      return {
        date: `${item.label}, ${item.year}`,
        Accounts: data[0] ? data[0]._sum.RealAccount : 0,
        "Active Traders": data[0] ? data[0]._sum.FTD : 0,
      };
    })
  );
});

export const getConversionChart = publicProcedure.query(async ({ ctx }) => {
  const date = new Date();
  let dateList = [];
  for (let i = 0; i < 6; i++) {
    const temp = {
      year: `${date.getFullYear()}`,
      month:
        date.getMonth() + 1 > 9
          ? `${date.getMonth() + 1}`
          : `0${date.getMonth() + 1}`,
      label: date.toLocaleString("en-US", { month: "short" }),
    };
    dateList[i] = temp;
    date.setMonth(date.getMonth() - 1);
  }
  dateList = dateList.reverse();
  console.log("date list:", dateList);

  return await Promise.all(
    dateList.map(async (item) => {
      const data = await ctx.prisma.dashboard.groupBy({
        by: ["merchant_id"],
        where: {
          affiliate_id,
          merchant_id: merchant_id ? merchant_id : 1,
          Date: {
            gte: new Date(`${item.year}-${item.month}-01`),
            lte: new Date(`${item.year}-${item.month}-31`),
          },
        },
        _sum: {
          FTD: true,
          RealAccount: true,
        },
      });
      let conversions = 0;
      if (data) {
        if (data[0]?._sum.RealAccount && data[0]?._sum.FTD) {
          conversions = (data[0]?._sum.FTD / data[0]?._sum.RealAccount) * 100;
        }
      }
      console.log("data->>>>>>>>>>>>", data);
      return {
        date: `${item.label}, ${item.year}`,
        Conversions: conversions,
      };
    })
  );
});

export const getCountryReport = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.commissions.groupBy({
    by: ["merchant_id", "affiliate_id"],
    where: {
      affiliate_id,
      merchant_id: merchant_id ? merchant_id : 1,
    },
    _sum: {
      Commission: true,
    },
  });

  return await Promise.all(
    data.map(async (item) => {
      const merchant = await ctx.prisma.merchants.findFirst({
        where: { id: item.merchant_id },
      });
      return {
        ...item,
        country: merchant?.country,
      };
    })
  );
});