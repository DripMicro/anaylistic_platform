import * as z from "zod"
import * as imports from "../zod-add-schema"
import { traders_tag_status } from "@prisma/client"
import { Completemerchants, RelatedmerchantsModel } from "./index"

export const traders_tagModel = z.object({
  id: z.number().int(),
  valid: z.number().int(),
  added_by: z.number().int(),
  rdate: z.date(),
  merchant_id: z.number().int(),
  trader_id: z.number().int(),
  revenue: z.number(),
  admin_revenue: z.number(),
  status: z.nativeEnum(traders_tag_status),
  notes: z.string(),
  calReport: z.number().int(),
})

export interface Completetraders_tag extends z.infer<typeof traders_tagModel> {
  merchant: Completemerchants
}

/**
 * Relatedtraders_tagModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedtraders_tagModel: z.ZodSchema<Completetraders_tag> = z.lazy(() => traders_tagModel.extend({
  merchant: RelatedmerchantsModel,
}))
