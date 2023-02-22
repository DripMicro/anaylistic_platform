import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const stats_bannersModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  ctag: z.string(),
  affiliate_id: z.number().int(),
  group_id: z.number().int(),
  merchant_id: z.number().int(),
  banner_id: z.number().int(),
  profile_id: z.number().int(),
  views: z.number().int(),
  clicks: z.number().int(),
})

export interface Completestats_banners extends z.infer<typeof stats_bannersModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * Relatedstats_bannersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedstats_bannersModel: z.ZodSchema<Completestats_banners> = z.lazy(() => stats_bannersModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
