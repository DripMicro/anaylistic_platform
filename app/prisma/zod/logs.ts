import * as z from "zod"
import * as imports from "../zod-add-schema"

export const logsModel = z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string(),
  var1: z.string(),
  var2: z.string(),
  var3: z.string(),
  rdate: z.date(),
  flag: z.string(),
  merchant_id: z.number().int(),
  text: z.string(),
  ip: z.string(),
  url: z.string(),
})
