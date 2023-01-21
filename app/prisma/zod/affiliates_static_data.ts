import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_static_dataModel = z.object({
  id: z.number().int(),
  affiliate_id: z.number().int(),
  merchant_id: z.number().int(),
  rdate: z.date(),
  key_name: z.string(),
  key_value: z.number(),
  created_on: z.date(),
})

export interface Completeaffiliates_static_data extends z.infer<typeof affiliates_static_dataModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_static_dataModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_static_dataModel: z.ZodSchema<Completeaffiliates_static_data> = z.lazy(() => affiliates_static_dataModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
