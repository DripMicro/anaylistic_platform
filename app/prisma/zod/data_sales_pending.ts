import * as z from "zod"
import * as imports from "../zod-add-schema"
import { data_sales_pending_type, data_sales_pending_status, data_sales_pending_currency } from "@prisma/client"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const data_sales_pendingModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  ctag: z.string(),
  affiliate_id: z.number().int(),
  group_id: z.number().int(),
  banner_id: z.number().int(),
  product_id: z.number().int(),
  profile_id: z.number().int(),
  country: z.string(),
  tranz_id: z.string(),
  trader_id: z.number().int(),
  sub_trader_id: z.number().int(),
  trader_alias: z.string(),
  type: z.nativeEnum(data_sales_pending_type),
  status: z.nativeEnum(data_sales_pending_status),
  amount: z.number(),
  original_amount: z.number(),
  positionSum: z.number(),
  freeParam: z.string(),
  freeParam2: z.string(),
  freeParam3: z.string(),
  freeParam4: z.string(),
  freeParam5: z.string(),
  merchant_id: z.number().int(),
  uid: z.string(),
  currency: z.nativeEnum(data_sales_pending_currency),
  campaign_id: z.number().int(),
  pendingRelationRecord: z.number().int(),
  created_by_admin_id: z.number().int(),
  isSelfDeposit: z.boolean(),
  spread: z.number().nullish(),
  pnl: z.number().nullish(),
  turnover: z.number().nullish(),
})

export interface Completedata_sales_pending extends z.infer<typeof data_sales_pendingModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * Relateddata_sales_pendingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relateddata_sales_pendingModel: z.ZodSchema<Completedata_sales_pending> = z.lazy(() => data_sales_pendingModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
