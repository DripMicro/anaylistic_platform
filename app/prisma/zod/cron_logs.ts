import * as z from "zod"
import * as imports from "../zod-add-schema"
import { Completemerchants, RelatedmerchantsModel } from "./index"

export const cron_logsModel = z.object({
  id: z.number().int(),
  lastscan: z.date(),
  month: z.number().int(),
  year: z.number().int(),
  merchant_id: z.number().int(),
  merchant_name: z.string(),
  success: z.number().int(),
  reg_total: z.number().int(),
  sales_total: z.number().int(),
  type: z.string(),
})

export interface Completecron_logs extends z.infer<typeof cron_logsModel> {
  merchant: Completemerchants
}

/**
 * Relatedcron_logsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedcron_logsModel: z.ZodSchema<Completecron_logs> = z.lazy(() => cron_logsModel.extend({
  merchant: RelatedmerchantsModel,
}))
