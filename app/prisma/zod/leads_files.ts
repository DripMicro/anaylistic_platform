import * as z from "zod"
import * as imports from "../zod-add-schema"

export const leads_filesModel = z.object({
  id: z.number().int(),
  admin_id: z.number().int(),
  affiliate_id: z.number().int(),
  merchant_id: z.number().int(),
  create_date: z.date(),
  update_date: z.date(),
  status: z.number().int(),
  count: z.number().int(),
  errors: z.number().int(),
  filename: z.string(),
  filename_original: z.string(),
  description: z.string(),
})
