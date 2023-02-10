import {  z } from "zod";


import {publicProcedure} from '../../trpc'
import { groupBy } from "rambda";
import type { dashboard } from "@prisma/client";
import {  merchant_id } from "./const";
import { SelectSchema } from "../../../db-schema-utils";
import {
  addFreeTextSearchJSFilter,
  addFreeTextSearchWhere,
} from "../../../../../prisma/prisma-utils";
import moment from "moment-mini";


export const getQuickReportSummary = publicProcedure.input(z.object({
    from:z.date().optional(),
    to: z.date().optional(),
    display:z.string().optional()
})).query(async ({ctx,input: {from, to,display}}) => {
    console.log(display)

    let data:any = await ctx.prisma.dashboard.groupBy({
        by:['merchant_id','Date'],
        where: {
            ...(merchant_id ?{merchant_id}: {}),
            Date:{
                gte:from,
                lt:to
            }
        },
        _sum:{
            Clicks:true,
            Impressions:true,
            Install:true,
            Leads:true,
            Demo:true,
            RealAccount:true,
            FTD:true,
            FTDAmount:true,
            Deposits:true,
            DepositsAmount:true,
            Bonus:true,
            RawFTD:true,
            RawFTDAmount:true,
            Withdrawal:true,
            ChargeBack:true,
            NetDeposit:true,
            PNL:true,
            ActiveTrader:true,
            Commission:true,
            PendingDeposits:true,
            PendingDepositsAmount:true
        },
    })

    console.log("Data -------> ",data)

    return data;
});


export const getCommissionReport = publicProcedure.input(z.object({
    from:z.date().optional(),
    to:z.date().optional(),
    merchant_id:z.string().optional(),
    trader_id:z.string().optional(),
    commission:z.string().optional()
})).query(async ({ctx,input: {from,to,merchant_id,trader_id,commission}}) => {
    let data = await ctx.prisma.commissions.findMany({
        where: {
            Date: {
                gte:from,
                lt:to
            }
        },
        include: {
            merchant: {
                select: {
                    name: true
                }
            },
            affiliate: {
                select:{
                    username:true
                }
            }
        }
    })
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
    const merchants = await ctx.prisma.merchants.findMany({
        
    })

    return merchants;
});


export const getAffiliateProfile = publicProcedure.query(async ({ctx}) => {
    const affiliates = await ctx.prisma.affiliates_profiles.findMany({
        where: {
            valid:1
        },
        select: {
            id:true,
            name:true
        }
    })

    return affiliates;
})