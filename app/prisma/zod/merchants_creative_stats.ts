import * as z from "zod"
import * as imports from "../zod-add-schema"

export const merchants_creative_statsModel = z.object({
  Date: z.date(),
  affiliate_id: z.number().int(),
  merchant_id: z.number().int(),
  BannerID: z.number().int(),
  Impressions: z.number().int(),
  Clicks: z.number().int(),
})
