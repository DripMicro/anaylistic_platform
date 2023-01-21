import * as z from "zod"
import * as imports from "../zod-add-schema"

export const reports_fieldsModel = z.object({
  id: z.number().int(),
  userlevel: z.string(),
  user_id: z.number().int(),
  rdate: z.date(),
  location: z.string(),
  removed_fields: z.string(),
})
