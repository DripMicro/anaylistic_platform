import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

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

export interface Completecommissions extends z.infer<typeof commissionsModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * RelatedcommissionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedcommissionsModel: z.ZodSchema<Completecommissions> = z.lazy(() => commissionsModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
