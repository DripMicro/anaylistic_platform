import * as z from "zod"
import * as imports from "../zod-add-schema"

export const data_recycleModel = z.object({
  id: z.number().int(),
  trader_id: z.number().int(),
  tranz_id: z.string(),
  recordRdate: z.date(),
  merchant_id: z.number().int(),
  admin_id: z.number().int(),
  rdate: z.date(),
  data_table: z.string(),
  fields: z.string(),
})
