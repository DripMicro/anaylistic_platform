import moment from "moment-mini";
import { z } from "zod";


import { publicProcedure } from '../../trpc';
import { merchant_id } from "./const";


export const getQuickReportSummary = publicProcedure.input(z.object({
    from:z.date().optional(),
    to: z.date().optional(),
    display:z.string().optional(),
})).query(async ({ctx,input: {from, to,display}}) => {
    console.log(display)

    const data = await ctx.prisma.dashboard.groupBy({
        by:['merchant_id','Date'],
        where: {
            merchant_id: merchant_id ? merchant_id: 1,
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
    const data = await ctx.prisma.commissions.findMany({
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
    from:z.date().optional(),
    to: z.date().optional(),
    merchant_id:z.number().optional(),
    unique_id: z.string().optional(),
    trader_id:z.string().optional(),
    type:z.string().optional()
})).query(async ({ctx, input: {from,to,merchant_id,unique_id,trader_id,type,}}) => {

    let type_filter = {}

    if(type ==="clicks") {
        type_filter = {
                clicks: {
                    gt:0
                }  
        }
    } 

    if (type === 'views') {
        type_filter = {
                views: {
                    gt:0
                }
        }
    }

    const listProfiles = await ctx.prisma.affiliates_profiles.findMany({
        where: {
            valid: 1
        },
        select: {
            name: true,
            id:true
        }
    });

    console.log("merchant id ------>",merchant_id);
    const distinct_id = await ctx.prisma.data_reg.findMany({
        select: {
            uid:true
        },
        where: {
            merchant_id: merchant_id ? merchant_id:1,
            trader_id:trader_id?trader_id:''
        },
        take:1
    });

    console.log("dates", {
        gte: moment(from).unix(),
        lt: moment(to).unix()
    });

    const totalRecords = await ctx.prisma.traffic.aggregate({
        where: {
            // uid: {
            //     gt:0,
            // },
            ...type_filter,
            AND: {
                uid:unique_id ? unique_id:''
            },
            merchant_id: {
                gt:0
            },
            unixRdate: {
                gte: moment(from).unix(),
                lt: moment(to).unix()
            },
        },
        _sum: {
            id:true,
        },
    });

    // const clickww = await ctx.prisma.traffic.findMany({
    //     ...type_filter,
    //     where: {
    //         uid:{
    //             gt:'0'
    //         },
    //         merchant_id: {
    //             gt:0
    //         }
    //     },
    //     include: {
    //         merchant: {
    //             select: {
    //                 name:true
    //             }
    //         },
    //         affiliate: {
    //             select: {
    //                 username:true
    //             }
    //         }
    //     }
    // })

    console.log("distinct id -------->", totalRecords)

    return totalRecords;
});


export const getInstallReport = publicProcedure.input(z.object({
    from:z.date().optional(),
    to:z.date().optional()
})).query(async ({ctx,input: {from,to}}) => {
    const ww = await ctx.prisma.data_install.findMany({
        orderBy:{
            type:'asc'
        },
        where: {
            merchant_id:{
                gt:0
            }
        },
        select:{
            type:true
        },
        take:1
    });
    console.log("weeeee -->",ww)
    const data = await ctx.prisma.data_install.findMany({
        orderBy:{
            rdate: 'asc'
        },
        where: {
            rdate: {
                gte:from,
                lt: to
            },
            merchant_id: {
                gt:0
            }
        }
    })

    return data
});


export const getCreativeReport = publicProcedure.input(z.object({
    from:z.date().optional(),
    to:z.date().optional(),
    merchant_id:z.string().optional(),
    banner_id: z.string().optional(),
    creative_type:z.string().optional()
})).query(async ({ctx,input: {from,to,merchant_id,banner_id,creative_type}}) => {
    let type_filter = {}

    if(merchant_id) {
        type_filter = {
                merchant_id: merchant_id
        }
    } 

    if (banner_id) {
        type_filter = {
                banner_id:banner_id
        }
    }

    const merchant_ids = await ctx.prisma.merchants_creative_stats.groupBy({
        by:['BannerID','affiliate_id','Date','merchant_id'],
        ...type_filter,
        where: {
            Date: {
                gte:from,
                lt:to
            }
        },
        _sum: {
            Clicks:true,
            Impressions:true
        },
    })
    let i = 0;
    while (i < merchant_ids.length) {

        console.log(merchant_ids[i])

        const banner_info = await ctx.prisma.merchants_creative.findMany({
            select: {
                id:true,
                title:true,
                type:true
            },
            where: {
                id: merchant_ids[i]? merchant_ids[i]?.BannerID:1
            }
        })
        i++;

    }
    
    return merchant_ids;
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
        where: {
            valid: 1
        }
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
});

function getAffiliateDealType() {

}