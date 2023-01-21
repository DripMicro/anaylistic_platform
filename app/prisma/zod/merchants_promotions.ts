import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel } from "./index"

export const merchants_promotionsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  merchant_id: z.number().int(),
  affiliate_id: z.number().int(),
  title: z.string(),
  group_id: z.number().int(),
})

export interface Completemerchants_promotions extends z.infer<typeof merchants_promotionsModel> {
  merchant: Completemerchants
}

/**
 * Relatedmerchants_promotionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedmerchants_promotionsModel: z.ZodSchema<Completemerchants_promotions> = z.lazy(() => merchants_promotionsModel.extend({
  merchant: RelatedmerchantsModel,
}))
