import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const affiliates_trafficModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  ip: z.string(),
  affiliate_id: z.number().int(),
  profile_id: z.number().int(),
  merchant_id: z.number().int(),
  refer_url: z.string(),
  visits: z.number().int(),
  uid: z.string(),
})

export interface Completeaffiliates_traffic extends z.infer<typeof affiliates_trafficModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * Relatedaffiliates_trafficModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedaffiliates_trafficModel: z.ZodSchema<Completeaffiliates_traffic> = z.lazy(() => affiliates_trafficModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
