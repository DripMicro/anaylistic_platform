import * as z from "zod"
import * as imports from "../zod-add-schema"
import { sub_banners_type } from "@prisma/client"
import { Completemerchants, RelatedmerchantsModel, Completelanguages, RelatedlanguagesModel, Completesub_stats, Relatedsub_statsModel } from "./index"

export const sub_bannersModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  last_update: z.date(),
  valid: z.number().int(),
  admin_id: z.number().int(),
  merchant_id: z.number().int(),
  language_id: z.number().int(),
  promotion_id: z.number().int(),
  title: z.string(),
  type: z.nativeEnum(sub_banners_type),
  width: z.number().int(),
  height: z.number().int(),
  file: z.string(),
  url: z.string(),
  alt: z.string(),
})

export interface Completesub_banners extends z.infer<typeof sub_bannersModel> {
  merchant: Completemerchants
  language: Completelanguages
  sub_stats: Completesub_stats[]
}

/**
 * Relatedsub_bannersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedsub_bannersModel: z.ZodSchema<Completesub_banners> = z.lazy(() => sub_bannersModel.extend({
  merchant: RelatedmerchantsModel,
  language: RelatedlanguagesModel,
  sub_stats: Relatedsub_statsModel.array(),
}))
