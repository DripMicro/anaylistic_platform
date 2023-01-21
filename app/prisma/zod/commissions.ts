import * as z from "zod"
import * as imports from "../zod-add-schema"

export const commissionsModel = z.object({
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  traderID: z.string(),
  transactionID: z.string(),
  Date: z.date(),
  Type: z.string(),
  Amount: z.number(),
  DealType: z.string(),
  Commission: z.number(),
  DealTypeCondition: z.string(),
  level: z.number().int().nullish(),
  subAffiliateID: z.number().int().nullish(),
  status: z.number().int().nullish(),
  updated: z.date().nullish(),
})
