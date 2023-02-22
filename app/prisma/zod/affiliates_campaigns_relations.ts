import * as z from "zod"
import * as imports from "../zod-add-schema"

export const affiliates_campaigns_relationsModel = z.object({
  id: z.number().int(),
  name: z.string(),
  campID: z.string(),
  affiliate_id: z.number().int(),
  advertiserID: z.number().int(),
  profile_id: z.number().int(),
  isDefaultCamp: z.boolean(),
  merchant_id: z.number().int(),
})
