import * as z from "zod"
import * as imports from "../zod-add-schema"
import { data_install_type } from "@prisma/client"
import { Completemerchants, RelatedmerchantsModel, Completeaffiliates, RelatedaffiliatesModel } from "./index"

export const data_installModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  ctag: z.string(),
  affiliate_id: z.number().int(),
  group_id: z.number().int(),
  banner_id: z.number().int(),
  profile_id: z.number().int(),
  product_id: z.number().int(),
  country: z.string(),
  trader_id: z.string(),
  phone: z.string(),
  trader_alias: z.string(),
  type: z.nativeEnum(data_install_type),
  freeParam: z.string(),
  freeParam2: z.string(),
  freeParam3: z.string(),
  freeParam4: z.string(),
  freeParam5: z.string(),
  merchant_id: z.number().int(),
  status: z.string(),
  lastUpdate: z.date(),
  platform: z.string(),
  uid: z.string(),
  email: z.string(),
  couponName: z.string(),
  campaign_id: z.string().nullish(),
  currentDate: z.date(),
})

export interface Completedata_install extends z.infer<typeof data_installModel> {
  merchant: Completemerchants
  affiliate: Completeaffiliates
}

/**
 * Relateddata_installModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relateddata_installModel: z.ZodSchema<Completedata_install> = z.lazy(() => data_installModel.extend({
  merchant: RelatedmerchantsModel,
  affiliate: RelatedaffiliatesModel,
}))
