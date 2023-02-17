import { Prisma } from "@prisma/client";
import moment from "moment-mini";
import { z } from "zod";


import { publicProcedure } from '../../trpc';


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
    type:z.string().optional()
})).query(async ({ctx,input: {from,to,merchant_id,banner_id,type}}) => {
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
        where: {
            ...type_filter,
            Date: {
                gte:from,
                lt:to
            }
        },
        _sum: {
            Clicks:true,
            Impressions:true
        },
        take:10
    });
    let i = 0;
    let totalLeads=0;
    let totalDemo=0;
    let totalReal=0;
    let ftd=0;
    let totalCPI=0;
    let ftd_amount=0;
    let depositingAccounts=0;
    let sumDeposits=0;
    let bonus=0;
    let cpaAmount=0;
    let withdrawal=0;
    let chargeback=0;
    let volume=0;
    let lots=0;
    let totalCom=0;
    let real_ftd = 0;
    let real_ftd_amount = 0;
    let totalImpresssions = 0;
    let totalClicks = 0;
    let totalLeadAccounts = 0;
    let totalRealAccounts =0;
    let totalDemoAccounts = 0; 
    let totalCPIM = 0; 
    let totalFTD = 0; 
    let totalFTDAmount=0;
    let totalRealFTD = 0; 
    let totalRealFTDAmount = 0; 
    let totalDeposits = 0; 
    let totalSumPNL = 0; 
    let totalDepositAmount = 0; 
    let totalVolume = 0; 
    let totalBonusAmount = 0; 
    let totalWithdrawalAmount = 0; 
    let totalChargeBackAmount = 0; 
    let totalPNL = 0;

    while (i < merchant_ids.length) {
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


        if (type && banner_info[0]?.type !== type) {
            continue;
        }

        const regww = await ctx.prisma.$queryRaw(
            Prisma.sql `SELECT 
            dr.banner_id,
        SUM(cm.Commission) as comms, 
        SUM(IF(dr.type='lead', 1, 0)) AS total_leads, 
        SUM(IF(dr.type='demo', 1, 0)) AS total_demo, 
        SUM(IF(dr.type='real', 1, 0)) AS total_real 
        FROM 445094_devsite.data_reg dr 
        LEFT JOIN 445094_devsite.commissions cm ON dr.trader_id = cm.traderID AND cm.Date BETWEEN ${from} AND ${to}
        WHERE dr.merchant_id =  ${merchant_ids[i]?.merchant_id}  AND  dr.banner_id=${banner_info[0]?.id} AND dr.rdate BETWEEN ${from} AND ${to} GROUP BY dr.banner_id`)



        if (Object.keys(regww).length > 0) {
            totalDemo = regww[0].total_demo;
            totalReal = regww[0].total_real;
            totalLeads = regww[0].total_leads;

        }
        // console.log("regestrations -------->", totalDemo, totalLeads, totalReal)



        totalImpresssions += merchant_ids[i]._sum.Impressions;
        totalClicks += merchant_ids[i]._sum.Clicks;
        totalDemoAccounts+=totalDemo;
        totalRealAccounts+=totalReal;
        totalLeadAccounts+=totalLeads;
        totalFTD+=ftd;
        totalCPIM+=totalCPI;
        totalRealFTD+=real_ftd;
        totalRealFTDAmount+=real_ftd_amount;
        totalDeposits += depositingAccounts;
        totalFTDAmount+=ftd_amount;
        totalSumPNL+=totalPNL;
        totalDepositAmount+=sumDeposits;
        totalVolume+=volume;
        totalBonusAmount+=bonus;
        totalWithdrawalAmount+=withdrawal;
        totalChargeBackAmount+chargeback
        i++;


    }

    
    return {
        totalImpresssions,
        totalClicks ,
        totalDemoAccounts,
        totalRealAccounts,
        totalLeadAccounts,
        totalFTD,
        totalCPIM,
        totalRealFTD,
        totalRealFTDAmount,
        totalDeposits,
        totalFTDAmount,
        totalSumPNL,
        totalDepositAmount,
        totalVolume,
        totalBonusAmount,
        totalWithdrawalAmount,
        totalChargeBackAmount
    };
});


export const getLandingPageData = publicProcedure.input(z.object({
    from: z.date().optional(),
    to: z.date().optional(),
    merchant_id: z.string().optional(),
    url:z.string().optional(),
    creative_type:z.string().optional()
})).query(async ({ctx,input: {from, to, merchant_id,url,creative_type}}) => {
    const bannersww  = await ctx.prisma.merchants_creative.findMany({
        where: {
            merchant_id: merchant_id,
            valid: 1,
        },
        include: {
            language:{
                select:{
                    title:true
                }
            },
            merchant: {
                select: {
                    name:true
                }
            }
        },
        take: 2
    });
    let creativeArray:any = new Object();
    creativeArray['banner_ww'] = bannersww;
    creativeArray['banner_type'] = 'Non LP Related';

    //clicks and impressions
    const trafficRow = await ctx.prisma.traffic.groupBy({
        by:['banner_id', 'id'],
        _sum: {
            clicks:true,
            views:true
        },
        where: {
            merchant_id: {
                gt:0
            },
            rdate: {
                gte:from,
                lt:to
            }
        },
        take:2
    });

    creativeArray['trafficRow'] = trafficRow;

    // const regww = await ctx.prisma.data_reg.findMany({
    //     include: {
    //         merchant:{
    //             select: {
    //                 name:true
    //             }
    //         }
    //     },
    //     where: {
    //         merchant_id:{
    //             gt:0
    //         },
    //         rdate: {
    //             gte: from,
    //             lt: to
    //         },
    //     }
    // })


    //Qualified
    console.log("creative array ------>", trafficRow)

    return creativeArray;
})


export const getTraderReport = publicProcedure.input(z.object({
    from:z.string().optional(),
    to:z.string().optional(),
    merchant_id:z.string().optional(),
    country:z.string().optional(),
    banner_id:z.string().optional(),
    trader_id:z.string().optional(),
    parameter:z.string().optional(),
    parameter_2:z.string().optional(),
    filter:z.string().optional()
})).query(async ({ctx,input: {from,to,merchant_id,country,banner_id,trader_id,parameter,parameter_2,filter}}) => {
    const profileNames = await ctx.prisma.affiliates_profiles.findMany({
        where: {
            valid:1
        },
        select: {
            id:true,
            name:true
        },
        take:5
    });


    // profile names
    let listProfiles = {};

    listProfiles['wwProfiles'] = profileNames;


    // list of wallets
    let resourceWallet = await ctx.prisma.merchants.findMany({
        where: {
            valid:1
        },
        select: {
            wallet_id:true,
            id:true
        }
    })


    // type filter
    let type_filter = {};
    if (filter === "real") {
        type_filter = {
            TraderStatus:'real'
        }
    } else if(filter ==='lead'){
        type_filter = {
            TraderStatus:'lead'
        }
    }else if(filter ==='demo') {
        type_filter = {
            TraderStatus:'demo'
        }
    } else if (filter === 'frozen') {
        type_filter = {
            TraderStatus:'frozen'
        }
    } else if (filter ==='ftd' || filter ==='totalftd') {
        type_filter = {
            AND:[
                {TraderStatus:'frozen'},
                {TraderStatus:'demo'}
            ],
            FirstDeposit:{
                gte:from,
                lt: to
            }
        }
    } else if (filter ==='activeTrader') {
        type_filter = {
            QualificationDate: {
                gte:from,
                lt:to
            },
            AND:[
                {TraderStatus:'frozen'},
                {TraderStatus:'demo'}
            ]
        }
    }

    //trader resource 
    let trader_report_resource;
    if (filter ==='ftd' || filter ==='totalftd') {
        trader_report_resource = await ctx.prisma.reporttraders.findMany({
            orderBy:{
                RegistrationDate:'desc',
                TraderID:'asc'
            },
            where: {
                ...type_filter
            },
            include: {
                data_reg:{
                    select: {
                        saleStatus:true,
                        freeParam5:true
                    }
                },
                affiliate:{
                    select: {
                        group_id:true
                    }
                }
            }
        })
    } else {
        trader_report_resource = await ctx.prisma.reporttraders.findMany({
            orderBy:{
                TraderID:'asc'
            },
            where: {
                ...type_filter,
                RegistrationDate: {
                    gte:from,
                    lt:to
                }
            },
            include: {
                data_reg:{
                    select: {
                        saleStatus:true,
                        freeParam5:true
                    }
                },
                affiliate:{
                    select: {
                        group_id:true
                    }
                }
            }
        })
    }
    console.log("profile names ------>", listProfiles)

    return listProfiles;
    
})

export const getDataInstall = publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.data_install.findMany({
        select: {
            type:true
        },
      where: {
        merchant_id,
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


export const getLongCountries = publicProcedure.input(z.object({
    table_type:z.string().optional()
})).query(async ({ctx,input:{table_type}}) =>{
    let countryArr  = {}
    let ww  = await ctx.prisma.countries.findMany({
        where: {
            id: {
                gt:1
            }
        },
        select: {
            id:true,
            title:true,
            code:true
        }
    })
    if (table_type === 'stats') {
        countryArr['id'] = ww;
    } else {
        countryArr['countrySHORT'] = ww;
    }

    return countryArr;
})

