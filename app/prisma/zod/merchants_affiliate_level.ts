import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const merchants_affiliate_levelModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  admin_id: z.number().int(),
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  level: z.number().int(),
  amount: z.number(),
})

export interface Completemerchants_affiliate_level extends z.infer<typeof merchants_affiliate_levelModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * Relatedmerchants_affiliate_levelModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedmerchants_affiliate_levelModel: z.ZodSchema<Completemerchants_affiliate_level> = z.lazy(() => merchants_affiliate_levelModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
