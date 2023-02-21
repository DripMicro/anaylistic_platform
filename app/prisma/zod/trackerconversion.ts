import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const trackerconversionModel = z.object({
  id: z.number().int(),
  affiliate_id: z.number().int(),
  uid: z.string(),
  DynamicTracker: z.string(),
  rdate: z.date(),
})

export interface Completetrackerconversion extends z.infer<typeof trackerconversionModel> {
  affiliate: Completeaffiliates
}

/**
 * RelatedtrackerconversionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedtrackerconversionModel: z.ZodSchema<Completetrackerconversion> = z.lazy(() => trackerconversionModel.extend({
  affiliate: RelatedaffiliatesModel,
}))
