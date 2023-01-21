import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_profilesModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  affiliate_id: z.number().int(),
  name: z.string(),
  url: z.string(),
  description: z.string(),
  source_traffic: z.string(),
})

export interface Completeaffiliates_profiles extends z.infer<typeof affiliates_profilesModel> {
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_profilesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_profilesModel: z.ZodSchema<Completeaffiliates_profiles> = z.lazy(() => affiliates_profilesModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
