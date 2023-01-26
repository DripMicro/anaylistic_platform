import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completeaffiliates, RelatedaffiliatesModel, Completesub_banners, Relatedsub_bannersModel } from "./index"

export const sub_statsModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  ctag: z.string(),
  banner_id: z.number().int(),
  affiliate_id: z.number().int(),
  profile_id: z.number().int(),
  views: z.number().int(),
  clicks: z.number().int(),
})

export interface Completesub_stats extends z.infer<typeof sub_statsModel> {
  affiliate: Completeaffiliates
  sub_banner: Completesub_banners
}

/**
 * Relatedsub_statsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedsub_statsModel: z.ZodSchema<Completesub_stats> = z.lazy(() => sub_statsModel.extend({
  affiliate: RelatedaffiliatesModel,
  sub_banner: Relatedsub_bannersModel,
}))
