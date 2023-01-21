import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const dashboardModel = z.object({
  Date: z.date(),
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  Impressions: z.number().int(),
  Clicks: z.number().int(),
  Install: z.number().int(),
  Leads: z.number().int(),
  Demo: z.number().int(),
  RealAccount: z.number().int(),
  FTD: z.number().int(),
  FTDAmount: z.number(),
  RawFTD: z.number().int(),
  RawFTDAmount: z.number(),
  Deposits: z.number().int(),
  DepositsAmount: z.number(),
  Bonus: z.number(),
  Withdrawal: z.number(),
  ChargeBack: z.number(),
  NetDeposit: z.number(),
  PNL: z.number(),
  ActiveTrader: z.number().int(),
  Commission: z.number(),
  PendingDeposits: z.number().int(),
  PendingDepositsAmount: z.number(),
  TotalMicroPayments: z.number().int(),
  MicroPaymentsAmount: z.number(),
  Volume: z.number(),
})

export interface Completedashboard extends z.infer<typeof dashboardModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * RelateddashboardModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelateddashboardModel: z.ZodSchema<Completedashboard> = z.lazy(() => dashboardModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
