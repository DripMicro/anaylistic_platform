import * as z from "zod"
import * as imports from "../zod-add-schema"

export const affiliates_statusModel = z.object({
  id: z.number().int(),
  rdate: z.date(),
  valid: z.number().int(),
  title: z.string(),
  created_by_admin_id: z.number().int(),
})
