import * as z from "zod"
import * as imports from "../zod-add-schema"
import { products_affiliates_deals_dealType, products_affiliates_deals_tier_type } from "@prisma/client"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const products_affiliates_dealsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  admin_id: z.number().int(),
  product_id: z.number().int(),
  affiliate_id: z.number().int(),
  dealType: z.nativeEnum(products_affiliates_deals_dealType),
  amount: z.number().nullish(),
  valid: z.boolean(),
  tier_amount: z.string(),
  tier_pcpa: z.number(),
  tier_type: z.nativeEnum(products_affiliates_deals_tier_type),
})

export interface Completeproducts_affiliates_deals extends z.infer<typeof products_affiliates_dealsModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedproducts_affiliates_dealsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedproducts_affiliates_dealsModel: z.ZodSchema<Completeproducts_affiliates_deals> = z.lazy(() => products_affiliates_dealsModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
