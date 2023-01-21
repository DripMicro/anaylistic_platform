import * as z from "zod"
import * as imports from "../zod-add-schema"
import { affiliates_deals_dealType, affiliates_deals_tier_type } from "@prisma/client"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_dealsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  admin_id: z.number().int(),
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  dealType: z.nativeEnum(affiliates_deals_dealType),
  amount: z.number().nullish(),
  valid: z.boolean(),
  tier_amount: z.string(),
  tier_pcpa: z.number(),
  tier_type: z.nativeEnum(affiliates_deals_tier_type),
  geo: z.string(),
})

export interface Completeaffiliates_deals extends z.infer<typeof affiliates_dealsModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_dealsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_dealsModel: z.ZodSchema<Completeaffiliates_deals> = z.lazy(() => affiliates_dealsModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
