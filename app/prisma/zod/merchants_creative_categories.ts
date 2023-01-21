import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants_creative, Relatedmerchants_creativeModel, Completemerchants, RelatedmerchantsModel } from "./index"

export const merchants_creative_categoriesModel = z.object({
  id: z.number().int(),
  categoryname: z.string(),
  valid: z.boolean(),
  merchant_id: z.number().int(),
  created_by_user_id: z.number().int(),
})

export interface Completemerchants_creative_categories extends z.infer<typeof merchants_creative_categoriesModel> {
  merchants_creative: Completemerchants_creative[]
  merchant: Completemerchants
}

/**
 * Relatedmerchants_creative_categoriesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedmerchants_creative_categoriesModel: z.ZodSchema<Completemerchants_creative_categories> = z.lazy(() => merchants_creative_categoriesModel.extend({
  merchants_creative: Relatedmerchants_creativeModel.array(),
  merchant: RelatedmerchantsModel,
}))
