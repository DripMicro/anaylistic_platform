import {  z } from "zod";


import {publicProcedure} from '../../trpc'
import { countBy, map, sortBy, uniq, uniqBy, uniqWith } from "rambda";
import type { dashboard, merchants_creative_type, Prisma } from "@prisma/client";
import { affiliate_id, merchant_id } from "./const";
import { SelectSchema } from "../../../db-schema-utils";
import {
  addFreeTextSearchJSFilter,
  addFreeTextSearchWhere,
} from "../../../../../prisma/prisma-utils";
import moment from "moment-mini";


export const getQuickReportSummary = publicProcedure.input(z.object({
    from:z.date().optional(),
    to: z.date().optional()
})).query(async ({ctx,input: {from, to}}) => {
    console.log(from,to)
    let data = await ctx.prisma.dashboard.findMany({
        where: {
            Date:{
                gt:from,
                lte:to
            }
        },
        take:10
    })
    const Clicks = data.reduce((acc:any,i:dashboard) => acc + i.Clicks,0);
    const Impressions = data.reduce((acc:any,i:dashboard) => acc + i.Impressions,0);
    const Install = data.reduce((acc:any,i:dashboard) => acc + i.Install,0);
    const Leads = data.reduce((acc:any,i:dashboard) => acc + i.Leads,0);
    const Demo = data.reduce((acc:any,i:dashboard) => acc + i.Demo,0);
    const RealAccount = data.reduce((acc:any,i:dashboard) => acc + i.RealAccount,0);
    const FTD = data.reduce((acc:any,i:dashboard) => acc + i.FTD,0);
    const FTDAmount = data.reduce((acc:any,i:dashboard) => acc + i.FTDAmount,0);
    const RawFTD = data.reduce((acc:any,i:dashboard) => acc + i.RawFTD,0);
    const RawFTDAmount = data.reduce((acc:any,i:dashboard) => acc + i.RawFTDAmount,0);
    const Deposits = data.reduce((acc:any,i:dashboard) => acc + i.Deposits,0);
    const DepositsAmount = data.reduce((acc:any,i:dashboard) => acc + i.DepositsAmount,0);
    const Bonus = data.reduce((acc:any,i:dashboard) => acc + i.Bonus,0);
    const Withdrawal = data.reduce((acc:any,i:dashboard) => acc + i.Withdrawal,0);
    const ChargeBack = data.reduce((acc:any,i:dashboard) => acc + i.ChargeBack,0);
    const NetDeposit = data.reduce((acc:any,i:dashboard) => acc + i.NetDeposit,0);
    const PNL = data.reduce((acc:any,i:dashboard) => acc + i.PNL,0);
    const Volume = data.reduce((acc:any,i:dashboard) => acc + i.Volume,0);
    const ActiveTrader = data.reduce((acc:any,i:dashboard) => acc + i.ActiveTrader,0);
    const Commission = data.reduce((acc:any,i:dashboard) => acc + i.Commission,0);
    const PendingDepositsAmount = data.reduce((acc:any,i:dashboard) => acc + i.PendingDepositsAmount,0);
    const PendingDeposits = data.reduce((acc:any,i:dashboard) => acc + i.PendingDeposits,0);
    
    let Week,Month,Year;

    data.map(item => {
        Week = moment(item.Date).week()
        Month = moment(item.Date).month()
        Year = moment(item.Date).year()
    })

    return {
        ...data,
        Clicks,
        Impressions,
        Install,
        Leads,
        Demo,
        RealAccount,
        FTD,
        FTDAmount,
        RawFTD,
        RawFTDAmount,
        Deposits,
        DepositsAmount,
        Bonus,
        Withdrawal,
        ChargeBack,
        NetDeposit,
        PNL,
        Volume,
        ActiveTrader,
        Commission,
        PendingDepositsAmount,
        PendingDeposits,
        Week,
        Month,
        Year
    };
})

export const getDataInstall = publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.data_install.findMany({
        select: {
            type:true
        },
      where: {
        merchant_id
        // valid: 1,
      },
    });
  
    return data;
  });


export const getAllMerchants = publicProcedure.query(async ({ctx}) => {
    const data = await ctx.prisma.merchants.findMany({
        where: {
            valid:1
        }
    })

    return data;
})