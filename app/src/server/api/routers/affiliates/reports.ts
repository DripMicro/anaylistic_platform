import {  z } from "zod";


import {publicProcedure} from '../../trpc'
import { groupBy } from "rambda";
import type { dashboard } from "@prisma/client";
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
    commission:z.string().optional(),
    page:z.number().int().optional(),
    items_per_page:z.number().int().optional()
})).query(async ({ctx,input: {from,to, page,items_per_page=10}}) => {
    let offset;
    if(page && items_per_page ) {
        offset = (page-1) * items_per_page
    }
    let data:any = await ctx.prisma.commissions.findMany({
        orderBy: {
            Date:'asc'
        },
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
        },
        take:items_per_page ? items_per_page:10,
        skip:offset
    })

    console.log("page -------->", page, "offset ----->", offset)

    return data;
});


export const getClicksReport = publicProcedure.input(z.object({
    from:z.string().optional(),
    to: z.string().optional(),
    merchant_id:z.number().optional(),

})).query(async ({ctx, input: {merchant_id}}) => {

    const listProfiles = ctx.prisma.affiliates_profiles.findMany({
        where: {
            valid: 1
        },
        select: {
            name: true,
            id:true
        }
    });

    console.log("merchant id ------>",merchant_id)
    let unique_id ;
     unique_id = ctx.prisma.data_reg.findMany({
        select: {
            uid:true
        },
        where: {
            merchant_id: merchant_id ? merchant_id:1
        },
        take:1
    });

    let totalRecords = ctx.prisma.traffic.aggregate({
        where: {
            clicks: {
                gt:0
            },
            uid: {
                gt:0
            },
            merchant_id: {
                gt:0
            }
        },
        _sum: {
            id:true,
        },
    });

    const clickww = ctx.prisma.traffic.findMany({
        where: {
            uid:{
                gt:0
            },
            merchant_id: {
                gt:0
            }
        },
        include: {
            merchant: {
                select: {
                    name:true
                }
            },
            affiliate: {
                select: {
                    username:true
                }
            }
        }
    })

    return unique_id;
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