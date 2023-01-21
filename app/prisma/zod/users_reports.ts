import * as z from "zod"
import * as imports from "../zod-add-schema"

export const users_reportsModel = z.object({
  id: z.number().int(),
  rdate: z.date().nullish(),
  level: z.string(),
  report_name: z.string(),
  url: z.string(),
  report: z.string(),
  user_id: z.number().int(),
})
