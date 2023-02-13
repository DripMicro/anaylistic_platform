import { z } from "zod";

import { publicProcedure } from "../../trpc";
import type { merchants_creative_type, Prisma } from "@prisma/client";
import { affiliate_id, merchant_id } from "./const";

export const getDashboard = publicProcedure.query(async ({ ctx }) => {
  const data = await ctx.prisma.$queryRaw`SELECT
      SUM( Impressions ) AS Impressions,
      SUM( Clicks ) AS Clicks,
      SUM( INSTALL ) AS INSTALL,
      SUM( Leads ) AS Leads,
      SUM( Demo ) AS Demo,
      SUM( RealAccount ) AS RealAccount,
      SUM( FTD ) AS FTD,
      SUM( FTDAmount ) AS FTDAmount,
      SUM( RawFTD ) AS RawFTD,
      SUM( RawFTDAmount ) AS RawFTDAmount,
      SUM( Deposits ) AS Deposits,
      SUM( DepositsAmount ) AS DepositsAmount,
      SUM( Bonus ) AS Bonus,
      SUM( Withdrawal ) AS Withdrawal,
      SUM( ChargeBack ) AS ChargeBack,
      SUM( NetDeposit ) AS NetDeposit,
      SUM( PNL ) AS PNL,
      SUM( ActiveTrader ) AS ActiveTrader,
      SUM( Commission ) AS Commission,
      SUM( PendingDeposits ) AS PendingDeposits,
      SUM( PendingDepositsAmount ) AS PendingDepositsAmount 
    FROM
      Dashboard 
    WHERE
      MerchantID = ${merchant_id}
      AND AffiliateID = ${affiliate_id}`;

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
